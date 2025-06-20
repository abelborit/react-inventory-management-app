export const sizesNumber = {
  mobile: 576,
  tablet: 768,
  laptop: 992,
  desktop: 1200,
  desktopXL: 1600,
};

const sizes = {
  mobile: "576px",
  tablet: "768px",
  laptop: "992px",
  desktop: "1200px",
  desktopXL: "1600px",
};

export const device = {
  mobile: `(min-width: ${sizes.mobile})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  desktop: `(min-width: ${sizes.desktop})`,
  desktopXL: `(min-width: ${sizes.desktopXL})`,
};

export type DeviceType = keyof typeof device;
