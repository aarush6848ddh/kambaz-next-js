"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import KambazNavigation from "./Navigation";
import Session from "./Account/Session";
import store from "./store";
import "./styles.css";

export default function KambazLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <Provider store={store}>
      <Session>
        <div id="wd-kambaz" className="wd-main-content-offset">
          <KambazNavigation />
          <div className="p-3 flex-fill">
            {children}
          </div>
        </div>
      </Session>
    </Provider>
  );
}
