"use client";
import React from "react";
import { persistor, store } from "@/redux/Store";
import { SessionProvider } from "next-auth/react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <SessionProvider>
                    {children}
                </SessionProvider>
            </PersistGate>
        </Provider>
    )
};

export default Providers;