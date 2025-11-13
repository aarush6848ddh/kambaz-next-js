"use client";

import { Provider } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import store from "./(Kambaz)/store";
import Session from "./(Kambaz)/Account/Session";

export default function Home() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace("/Account");
  }, [router]);
  
  return (
    <Provider store={store}>
      <Session>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
          <p>Redirecting...</p>
        </div>
      </Session>
    </Provider>
  );
}

