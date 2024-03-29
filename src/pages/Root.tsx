import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { Wrapper, Header } from "../components";
import StickyBox from "react-sticky-box";

export const Root = (): React.ReactNode => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const delay = setTimeout(() => {
      setIsVisible(true);
    }, 700);

    return () => clearTimeout(delay);
  });
  return (
    <Wrapper>
      <div
        className={`w-full h-full flex flex-col opacity-0 transition-opacity duration-700 ${
          isVisible ? "opacity-100" : ""
        }`}
      >
        <div className="w-full h-full text-white">
          <div className="w-11/12 sm:w-4/5 mx-4 sm:mx-auto my-0" id="container">
            <StickyBox
              className="sticky-header"
              style={{
                minWidth: "200px",
                backgroundColor: "black",
                boxShadow: "1px -60px 1px 80px black",
              }}
              offsetBottom={20}
              offsetTop={20}
            >
              <Header />
            </StickyBox>
            <Outlet />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
