import { useEffect, useRef } from "react";
import lottie from "lottie-web";

const LottieAnimation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "https://lottie.host/embed/47d27d61-3719-463a-8d02-fe152d4d9a0e/bjoLQUhMZ2.json",
    });

    return () => instance.destroy(); // Cleanup on unmount
  }, []);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%" }}></div>
  );
};

export default LottieAnimation;
