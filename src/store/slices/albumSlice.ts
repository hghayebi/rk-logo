import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type LogoType = {
  size: { width: number; height: number };
  relativePosition: { bottom: number; right: number };
};

export interface AlbumType {
  logo: LogoType;
  containerBoxPosition: { bottom: number; right: number };
}

const initialState: AlbumType = {
  logo: {
    size: {
      width: 200,
      height: 200,
    },
    relativePosition: {
      bottom: 0,
      right: 0,
    },
  },
  containerBoxPosition: { bottom: 0, right: 0 },
};

export const albumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {
    setLogoSize(state, action: PayloadAction<LogoType["size"]>) {
      state.logo = { ...state.logo, size: action.payload };
    },
    setLogoPosition(
      state,
      action: PayloadAction<{ bottom: number; right: number }>
    ) {
      state.logo = { ...state.logo, relativePosition: action.payload };
    },
    setContainerBoxPosition(
      state,
      action: PayloadAction<{ bottom: number; right: number }>
    ) {
      state.containerBoxPosition = action.payload;
    },
  },
});

export const { setLogoSize, setContainerBoxPosition, setLogoPosition } =
  albumSlice.actions;
