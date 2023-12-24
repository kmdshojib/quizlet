"use client";

import { Provider } from "react-redux";
import store, { persistor } from "./Store";
import { PersistGate } from "redux-persist/integration/react";
import Spinner from "@/app/Components/Common/Spinner";


const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Spinner />} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default Providers;
