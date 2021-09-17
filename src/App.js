import { useEffect, useRef, useState } from "react";

import "./App.scss";
import Contacts from "./components/Contacts/Contacts";
import ContactUs from "./components/ContactUs/ContactUs";
import Doubts from "./components/Doubts/Doubts";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import InfoSlider from "./components/InfoSlider/InfoSlider";
import Intro from "./components/Intro/Intro";
import Team from "./components/Team/Team";

import { isElementVisible } from "./helpers/utils";

import useScroll from "./hooks/useScroll";
import useThrottling from "./hooks/useThrottling";

const SCROLL_DELAY = 750;

function App() {
  const [isShowingIntro, setIsShowingIntro] = useState(true);
  const introRef = useRef();

  const scrollHandle = (_, isScrollingUp) => {
    if (isElementVisible(introRef.current) && !isScrollingUp) {
      setIsShowingIntro(false);
    }

    if (isElementVisible(introRef.current) && isScrollingUp) {
      setIsShowingIntro(true);
    }
  };

  const throttledScrollHandle = useThrottling(scrollHandle, SCROLL_DELAY);

  const { block, unblock } = useScroll((...args) => {
    if (isShowingIntro) return throttledScrollHandle(...args);
    scrollHandle(...args);
  });

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (["A", "BUTTON"].includes(e.target.tagName)) {
        scrollHandle();
      }
    });
  }, []);

  useEffect(() => {
    if (isShowingIntro) {
      block();
      window.scrollTo({ top: 0 });
    } else {
      unblock();
      window.scrollTo({ top: window.innerHeight + 10 });
    }
  }, [block, unblock, isShowingIntro]);

  return (
    <>
      <Header />
      <main className="main">
        <Intro ref={(ref) => (introRef.current = ref)} />
        <InfoSlider />
        <Info />
        <Doubts />
        <Team />
        <ContactUs />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}

export default App;
