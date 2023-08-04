import { configureStore } from "@reduxjs/toolkit"
import { filesReducer } from "./slices/files"
import { UIReducer } from "./slices/ui";


const store = configureStore({
  reducer: {
    files: filesReducer,
    ui: UIReducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false
  }),
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch

export type { RootState, AppDispatch };
export { store };