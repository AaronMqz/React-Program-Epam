import React from "react";
import { LogoComponent as Logo } from "../Logo/Logo.component";
import { Footer } from "./Footer.styled";

export const FooterComponent = () => {
  return (
    <Footer.Conatiner>
      <Logo />
    </Footer.Conatiner>
  );
};
