import React from "react";
// import { Link } from "react-router-dom";
import { HeaderSection, Logo, LogoText } from "./style";

const Header = () => {
    return (

      <HeaderSection>
            
          <div className="container">
              <Logo>
                  <LogoText>Gastronomy</LogoText>
              </Logo>
          </div>
          
      </HeaderSection>
      );
}

export default Header;