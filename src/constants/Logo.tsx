import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <React.Fragment>
      <Image src="/mobile.png" alt="buy me coffee" height={10} width={25} />
      <h1 className="font-mono font-semibold hidden md:block transition-all">
        Buy Me Coffee
      </h1>
    </React.Fragment>
  );
};

export default Logo;
