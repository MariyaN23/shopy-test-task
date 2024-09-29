import {AppRootState} from "../store";

export const selectHistory = (state: AppRootState) => state.history
export const selectItemsInHistory = (state: AppRootState) => state.history.itemsInHistory