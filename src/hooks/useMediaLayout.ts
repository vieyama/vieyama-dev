import {useMediaQuery} from "@mantine/hooks";

export const MediaQueryProp = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "screen-870": "870px",
  "2xl": "1536px",
};

type KeyMedia = keyof typeof MediaQueryProp;

export function useMediaLayout(screens: KeyMedia = "sm") {
  const query = MediaQueryProp[screens];
  const screen = `(max-width: ${query})`;

  return useMediaQuery(screen);
}
