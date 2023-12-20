import React from "react";
interface ContainerTypes {
  children: React.ReactNode;
  className?: string;
}
const Container: React.FC<ContainerTypes> = ({ children, className }) => {
  return (
    <div className={`${className} max-w-7xl w-11/12 mx-auto  py-10 md:py-12`}>
      {children}
    </div>
  );
};

export default Container;
