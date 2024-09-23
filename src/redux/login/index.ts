import * as loginSelectors from './loginSelector'
import * as loginActions from  './loginActions'
import {slice} from "./loginReducer"

const loginReducer = slice.reducer

export {
    loginSelectors,
    loginActions,
    loginReducer
}