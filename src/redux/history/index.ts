import * as historySelectors from './historySelector'
import * as historyActions from './historyActions'
import {slice} from "./historyReducer"

const historyReducer = slice.reducer

export {
    historySelectors,
    historyReducer,
    historyActions
}
