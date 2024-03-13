import Link from "next/link";
import { useEffect, useState } from "react";

import * as Meta from "@/common/metaSeo/titleMeta";
import Main from "@/layouts/Main";

const Homepage = (data: any) => {
  const [isDotVisible, setIsDotVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    console.log(currentScrollPos);

    // A simple example: hide dot if we've scrolled more than 50px
    if (currentScrollPos > 50) {
      setIsDotVisible(false);
    } else {
      setIsDotVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log(isDotVisible);
  return (
    <Main meta={Meta.HomePage}>
      <div className="hehe" style={{ height: "200rem", background: "yellow" }}>
        21312
      </div>
      <Link href={"/hello"} style={{ height: "200rem", background: "red" }}>
        123
      </Link>
    </Main>
  );
};

export default Homepage;
