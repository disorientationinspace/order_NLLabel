import { useCallback, useEffect, useMemo, useRef } from "react";

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
const keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

const preventDefault = (e) => e.preventDefault();

const useScroll = (onScroll) => {
  if (!onScroll) {
    throw new Error("You must pass onScroll function to the useBlockScroll");
  }

  const blocks = useRef(false);
  const supportsPassive = useRef(false);

  try {
    window.addEventListener(
      "test",
      null,
      Object.defineProperty({}, "passive", {
        get: function () {
          supportsPassive.current = true;
          return true;
        },
      })
    );
  } catch (e) {}

  const wheelOpt = useMemo(
    () => (supportsPassive.current ? { passive: false } : false),
    []
  );
  const wheelEvent =
    "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

  const handleScroll = useCallback(
    (e) => {
      if (blocks.current) preventDefault(e);
      const isScrollingUp = e.wheelDeltaY > 0;
      onScroll(e, isScrollingUp);
    },
    [onScroll]
  );

  const handleTouchMove = useCallback(
    (e) => {
      const start = e.changedTouches[0];

      const handleTouchEnd = (e) => {
        const end = e.changedTouches[0];
        const hasScrolled = Math.abs(end.screenY - start.screenY) > 0;
        const isScrollingUp = end.screenY - start.screenY > 0;

        if (hasScrolled) {
          onScroll(e, isScrollingUp);
        }

        window.removeEventListener("touchend", handleTouchEnd);
      };

      window.addEventListener("touchend", handleTouchEnd);
    },
    [onScroll]
  );

  const handleScrollKeys = useCallback(
    (e) => {
      if (keys[e.keyCode]) {
        if (blocks.current) preventDefault(e);
        onScroll(e);
      }
    },
    [onScroll]
  );

  useEffect(() => {
    window.addEventListener("DOMMouseScroll", handleScroll, false); // older FF
    window.addEventListener(wheelEvent, handleScroll, wheelOpt); // modern desktop
    window.addEventListener("touchstart", handleTouchMove, wheelOpt); // mobile
    window.addEventListener("keydown", handleScrollKeys, false);
  }, [handleScrollKeys, handleTouchMove, wheelEvent, wheelOpt, handleScroll]);

  const block = useCallback(() => {
    blocks.current = true;
    window.document.body.style.overflow = "hidden";
  }, []);

  const unblock = useCallback(() => {
    blocks.current = false;
    window.document.body.style.overflow = "unset";
  }, []);

  return { block, unblock };
};

export default useScroll;
