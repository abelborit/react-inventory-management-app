import { useEffect, useState } from "react";
import { DeviceType, sizesNumber } from "../styles/breakpoints";

export const useDeviceType = (): DeviceType => {
  const [deviceType, setDeviceType] = useState<DeviceType>(() =>
    getDeviceType(window.innerWidth)
  );

  function getDeviceType(width: number): DeviceType {
    if (width < sizesNumber.mobile) return "mobile";
    if (width < sizesNumber.tablet) return "tablet";
    if (width < sizesNumber.laptop) return "laptop";
    return "desktop";
  }

  useEffect(() => {
    const handleResize = () => {
      setDeviceType(getDeviceType(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return deviceType;
};
