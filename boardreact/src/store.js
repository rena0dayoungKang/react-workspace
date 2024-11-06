//로그인 정보를 세션에 저장하기 위한 storage 생성
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session'; //sessionStorage에 저장
// import storage from 'redux-persist/lib/storage'; //localStorage 저장
import { totoReducer } from './reducer';

const persistConfig = {
    key: 'root',
    storage: storageSession
}

const persistedReducer = persistReducer(persistConfig, totoReducer);
export const store = configureStore({
    reducer: { persistedReducer },
    middleWare: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});


