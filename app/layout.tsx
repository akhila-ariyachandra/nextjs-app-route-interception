import type { ReactNode, FC } from "react";

import "./global.scss";

interface RootLayoutProps {
  children: ReactNode;
  modal: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children, modal }) => {
  return (
    <html>
      <body>
        <main className="container">{children}</main>

        {modal}
      </body>
    </html>
  );
};

export default RootLayout;
