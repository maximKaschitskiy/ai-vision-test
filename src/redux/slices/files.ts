import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilesType, StatusType } from '../../types';

  const initialState: FilesType[] = [];

  const filesSlice = createSlice({
    name: 'files',
    initialState,
    reducers: {
      addFiles(state, action: PayloadAction<FilesType[]>) {
        return [...state, ...action.payload];
      },
      removeFiles(state, action: PayloadAction<number>) {
        state.splice(action.payload, 1);
      },
      setStatus(state, action: PayloadAction<{item: number, status: StatusType}>) {
        state[action.payload.item]['status'] = action.payload.status;
      },
    },
  });
  
const { addFiles, removeFiles, setStatus } = filesSlice.actions;

const filesReducer = filesSlice.reducer;

export {
    addFiles,
    removeFiles,
    setStatus,
    filesReducer,
};