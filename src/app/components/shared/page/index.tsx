import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";

interface PageProps {
  title: string;
  children?: ReactNode;
}

export const Page = ({ title, children }: PageProps) => {
  return (
    <>
      <Helmet title={title} />
      {children}
    </>
  );
};
