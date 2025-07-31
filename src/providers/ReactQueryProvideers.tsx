import { type FC, ReactNode } from "react";

interface IReactProviders {
  children: ReactNode;
}

export const ReactQueryProvideers: FC<IReactProviders> = ({ children }) => {
  return <>{children}</>;
};

export default ReactQueryProvideers;
