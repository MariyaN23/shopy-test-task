import {AppRootState} from "../store";

export const selectProducts = (state: AppRootState) => state.products.products
export const selectTotal = (state: AppRootState) => state.products.total
export const selectUserProducts = (state: AppRootState) => state.products.allUsersProducts