import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UiType } from '../../types';

  const initialState: UiType = {
    input: '',
    dragged: false,
    validity: false
  };

  const UISlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
      setInput(state, _action: PayloadAction<UiType['input']>) {
        state.input = '';
      },
      setDragged(state, action: PayloadAction<UiType['dragged']>) {
        state.dragged = action.payload;
      },
      setValidity(state, action: PayloadAction<UiType['validity']>) {
        state.validity = action.payload;
      },
    },
  });
  
const { setDragged, setInput, setValidity } = UISlice.actions;

const UIReducer = UISlice.reducer;

export {
    setDragged,
    setInput,
    setValidity,
    UIReducer
};