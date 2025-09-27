import type { ReactNode } from "react";

type AppLayoutProps = {
  children: ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
  return <>{children}</>;
};

export default AppLayout;
