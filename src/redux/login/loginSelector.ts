import {AppRootState} from "../store";

export const selectIsAuthorised = (state: AppRootState) => state.login.isAuthorised