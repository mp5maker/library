import * as React from "react";

interface IFooter {
  companyName: string;
}

const Footer: React.FC<IFooter> = ({ companyName }) => {
  return <div>@ All Rights Reserved, {companyName} { new Date().getUTCFullYear() }</div>;
};

export default Footer;
