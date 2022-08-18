import { configureStore } from '@reduxjs/toolkit';
import { testSlice  } from './test.slice';

export const rootReducer = {
  test: testSlice.reducer
};

export const store = configureStore({
  reducer: rootReducer
})

// 全局，如果用不到可删除
export const AppDispatch = store.dispatch;
export const RootState = store.getState;


