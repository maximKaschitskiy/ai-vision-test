import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme";

export const Providers = ({ children }: { children: ReactNode }) => {

    return (
            <Provider store={store}>
                <BrowserRouter>
                    <ThemeProvider theme={theme}>
                        {children}
                    </ThemeProvider>
                </BrowserRouter>
            </Provider>
    )

}