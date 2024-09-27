import * as cartSelectors from './cartSelector'
import * as cartActions from  './cartActions'
import {slice} from "./cartReducer"

const cartReducer = slice.reducer

export {
    cartSelectors,
    cartReducer,
    cartActions
}
