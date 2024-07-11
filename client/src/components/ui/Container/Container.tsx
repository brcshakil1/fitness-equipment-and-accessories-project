import { ReactNode } from "react";

interface IChildren {
  children: ReactNode;
}

const Container = ({ children }: IChildren): JSX.Element => {
  return <div className="max-w-7xl px-5 mx-auto">{children}</div>;
};

export default Container;
