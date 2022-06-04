import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StaticImageData } from 'next/image';

export interface CounterInterface {
  isOpen: boolean;
  picture: string | StaticImageData;
}

const initialState: CounterInterface = {
  isOpen: false,
  picture: '',
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    setPicture: (state, action: PayloadAction<string | StaticImageData>) => {
      state.picture = action.payload;
    },
  },
});

export const { openModal, closeModal, setPicture } = modalSlice.actions;

export default modalSlice.reducer;
