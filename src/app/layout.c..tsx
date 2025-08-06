"use client";
import { ReactQueryProvider } from "@/providers/ReactQueryProvideers";
import { ReactNode, type FC } from "react";

interface ILay {
  children: ReactNode;
}

const LayoutClient: FC<ILay> = ({ children }) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};

export default LayoutClient;
