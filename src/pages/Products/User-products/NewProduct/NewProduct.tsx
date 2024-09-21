import React, {ChangeEvent} from 'react';
import s from './NewProduct.module.css'
import {Header} from "../../../Header/Header";
import {CustomTitle} from "../../../../components/CustomTitle";
import load from '../../../../images/UploadImage.svg'
import {CustomImage} from "../../../../components/CustomImage";
import {CustomButton} from "../../../../components/CustomButton";
import {CustomText} from "../../../../components/CustomText";
import {CustomInput} from "../../../../components/CustomInput";
import {app} from "../../../../firebase";
import {getDownloadURL, getStorage, ref, uploadBytes} from "firebase/storage";

export const NewProduct = () => {
    const [imgUrl, setImgUrl] = React.useState('')
    const [uploading, setUploading] = React.useState(false)
    const onPhotoSelected = async (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files?.length) {
            const image = e.currentTarget.files[0]
            if (image) {
                try {
                    setUploading(true)
                    const storage = getStorage(app)
                    const storageRef = ref(storage, "products/" + image.name)
                    await uploadBytes(storageRef, image)
                    const downloadUrl = await getDownloadURL(storageRef)
                    console.log(downloadUrl)
                    setImgUrl(downloadUrl)
                } catch (e) {
                    console.log(e)
                } finally {
                    setUploading(false)
                }
            }
        }
    }
    const [name, setName] = React.useState<string>('')
    const [price, setPrice] = React.useState<number>(0)
    const uploadProduct = ()=> {
        const newProduct = {
            name,
            price,
            imageUrl: imgUrl
        }
        console.log(newProduct)
    }
    return (
        <div>
            <Header/>
            <div className={s.container}>
                <CustomTitle order={3}>Create new product</CustomTitle>
                <div className={s.imageContainer}>
                    <CustomImage src={load}/>
                    {imgUrl && <img src={imgUrl} alt="Uploaded" />}
                    <CustomButton variant="outline" color="gray">Upload Photo</CustomButton>
                    {uploading ? "Uploading..." : "Upload Image"}
                    <input type={'file'} accept=".jpg, .png" onChange={onPhotoSelected}/>
                </div>
                <div className={s.inputsContainer}>
                    <CustomText fw={700}>Title of the product</CustomText>
                    <CustomInput placeholder={'Enter title of the product...'} onChange={(event) =>
                        setName(event.currentTarget.value)} value={name}/>

                    <CustomText fw={700}>Price</CustomText>
                    <CustomInput placeholder={'Enter price of the product'} onChange={(event) =>
                        setPrice(+event.currentTarget.value)} value={String(price)}/>
                    <div className={s.uploadButton}>
                        <CustomButton onClick={uploadProduct}>Upload Product</CustomButton>
                    </div>
                </div>
            </div>
        </div>
    );
};