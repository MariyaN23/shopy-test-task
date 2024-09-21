import {slice} from './productsReduces'
import * as productsAsyncActions from './productsActions'
import * as productsSelectors from './productsSelector'


const productsReduces = slice.reducer
const productsActions = {...productsAsyncActions, ...slice.actions}

export {
    productsReduces,
    productsActions
}