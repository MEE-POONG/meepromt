import React from "react";

import { navData } from '@/data/navber';
import Link from "next/link";
import HoverMenu from "./HoverMenu";
import { useRouter } from "next/router";
import { BsFillBellFill } from "react-icons/bs";
import BtnSetting from "./BtnSetting";

export default function TheNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const router = useRouter(); // add this line

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);


  return (
    <>
      s
    </>
  );
}