import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from "./index"

const initialState = {
  user: 'react-template'
};

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    setTest(state, action: PayloadAction<string>) {
      state.user = action.payload;
    },
  },
});

// 获取值
export const selectTest = (state: ReturnType<typeof RootState>) => state.test.user

// 同步设置
export const { setTest } = testSlice.actions

// 异步设置
export const setTestAsync = (name: string) => async (dispatch: typeof AppDispatch) => {
  setTimeout(() => {
    dispatch(setTest(name))
  }, 1000)
}
