import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './reducers';

export const store = configureStore({
    reducer: rootReducer,
})

export type AppRootState = ReturnType<RootReducerType>
export type RootReducerType = typeof rootReducer
export type AppDispatchType = typeof store.dispatch