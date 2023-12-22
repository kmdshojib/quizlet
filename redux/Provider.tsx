"use client";

import { Provider } from "react-redux";
import store, { persistor } from "./Store";
import { PersistGate } from "redux-persist/integration/react";


const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default Providers;
