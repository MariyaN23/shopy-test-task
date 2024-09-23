import React, {useRef} from 'react';
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
import {FileInput} from "@mantine/core";
import {useActions} from "../../../../redux/useActions";
import {productsActions} from "../../../../redux/products";

export const NewProduct = () => {
    const {addProduct} = useActions(productsActions)

    const imgRef = useRef<HTMLButtonElement>(null)
    const [imgUrl, setImgUrl] = React.useState('')
    const onPhotoSelected = async (payload: File | null) => {
        if (payload) {
            const image = payload
            if (image) {
                try {
                    const storage = getStorage(app)
                    const storageRef = ref(storage, "products/" + image.name)
                    await uploadBytes(storageRef, image)
                    const downloadUrl = await getDownloadURL(storageRef)
                    console.log(downloadUrl)
                    setImgUrl(downloadUrl)
                } catch (e) {
                    console.log(e)
                }
            }
        }
    }
    const [name, setName] = React.useState<string>('')
    const [price, setPrice] = React.useState<string>('')
    const priceOfProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value
        if ((+value > 0 && +value <= 10000) || value === '') {
            setPrice(value)
        }
    }
    const nameOfProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }

    const uploadProduct = () => {
        if (price && name && imgUrl && name.length <= 30) {
            const newProduct = {
                name,
                price: +price,
                image: imgUrl
            }
            addProduct(newProduct)
            setPrice('')
            setName('')
            setImgUrl('')
            if (imgRef.current) {
                imgRef.current.textContent = 'Upload Photo'
            }
        }
    }
    return (
        <div>
            <Header/>
            <div className={s.container}>
                <CustomTitle order={3}>Create new product</CustomTitle>
                <div className={s.imageContainer}>
                    {imgUrl ? <CustomImage src={imgUrl}/> : <CustomImage src={load}/>}
                    <FileInput accept="image/png,image/jpeg"
                               placeholder="Upload Photo"
                               onChange={onPhotoSelected}
                               className={s.uploadPhotoInput}
                               ref={imgRef}/>
                </div>
                <div className={s.inputsContainer}>
                    <CustomText fw={700}>Title of the product</CustomText>
                    <CustomInput placeholder={'Enter title of the product...'} onChange={nameOfProduct} maxLength={30}
                                 value={name}/>
                    <CustomText fw={700}>Price</CustomText>
                    <CustomInput placeholder={'Enter price of the product'}
                                 type={'number'}
                                 onChange={priceOfProduct} value={price}/>
                    <div className={s.uploadButton}>
                        <CustomButton onClick={uploadProduct}>Upload Product</CustomButton>
                    </div>
                </div>
            </div>
        </div>
    );
};