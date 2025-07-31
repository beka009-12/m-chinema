"use client";
import ReactQueryProvideers from "@/providers/ReactQueryProvideers";
import { ReactNode, type FC } from "react";

interface ILay {
  children: ReactNode;
}

const LayoutClient: FC<ILay> = ({ children }) => {
  return <ReactQueryProvideers>{children}</ReactQueryProvideers>;
};

export default LayoutClient;
