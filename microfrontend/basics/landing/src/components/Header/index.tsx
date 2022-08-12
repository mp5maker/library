import * as React from "react";

interface IHeader {
  companyName: string;
}

const Header: React.FC<IHeader> = ({ companyName }) => {
  return <div>{companyName}</div>;
};

export default Header;
