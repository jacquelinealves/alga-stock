import React from "react";
import "./header.scss";

declare interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header className="AppHeader">
      <h1>{props.title}</h1>
    </header>
  );
};

export default Header;
