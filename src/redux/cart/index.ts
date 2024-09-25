import * as cartSelectors from './cartSelector'
import {slice} from "./cartReducer"

const cartReducer = slice.reducer

export {
    cartSelectors,
    cartReducer
}
