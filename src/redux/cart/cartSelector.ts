import {AppRootState} from "../store";

export const selectItemsInCart = (state: AppRootState) => state.cart.itemsInCart
export const selectTotalPrice = (state: AppRootState) => state.cart.totalPrice
