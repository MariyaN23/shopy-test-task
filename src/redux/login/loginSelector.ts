import {AppRootState} from "../store";

export const selectIsAuthorised = (state: AppRootState) => state.login.isAuthorised
export const selectUsersId = (state: AppRootState) => state.login.userId