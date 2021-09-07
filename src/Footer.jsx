import React from "react";
const Footer = () => {
  const year = new Date().getFullYear();
  // console.log(year)
  return (
    <>
      <footer className='w-100 bg-light text-center  position-sticky bottom-0' >
        <p>Copyright © {year} Yash Jangid</p>
      </footer>
    </>
  );
};

export default Footer;
