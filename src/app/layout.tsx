"use client";
import type {Metadata} from "next";

import React, {useState} from "react";
import {useEffect} from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "PreguntaXpress",
  description: "Aplicación de preguntas y respuestas anónimas - Goncy",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setShowLoader(false);
    }, 3000); // Cambia este valor al número de milisegundos que quieras (3000 = 3 segundos)

    return () => clearTimeout(loaderTimeout);
  }, []);

  return (
    <html lang="en">
      <body>
        {showLoader ? (
          <div className="loader loader-container">
            <img alt="Loading" className="max-w-sm" src="/PreguntaXpress-loader-image.png" />
          </div>
        ) : (
          <main className="m-auto min-h-screen max-w-screen-lg p-4 sm:p-24">{children}</main>
        )}
      </body>
    </html>
  );
}
