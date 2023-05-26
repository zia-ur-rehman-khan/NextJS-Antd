import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const { pathname } = useRouter();

  const showHeaderAndFooter = ![
    "/login",
    "/sign-up",
    "/forgot-password",
    "/otp",
    "/new-password",
    "/coming-soon",
  ].includes(pathname);

  return (
    <div className="layout-container">
      <div className="main-container">
        {showHeaderAndFooter && <Header />}
        {children}
        {showHeaderAndFooter && <Footer />}
      </div>
    </div>
  );
};

export default Layout;
