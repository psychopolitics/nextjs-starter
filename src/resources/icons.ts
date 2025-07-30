// icons.ts
import { IconType } from "react-icons";
import { PiHouse, PiUser, PiGridFour, PiBookBookmark, PiImage, PiEnvelope, PiGlobe, PiLink, PiArrowRight, PiArrowUpRight, PiX, PiDotsThree, PiCode, PiTerminal } from "react-icons/pi";
import { FaGithub, FaLinkedin, FaDiscord, FaThreads } from "react-icons/fa6";

export const iconLibrary: Record<string, IconType> = {
  home: PiHouse,
  person: PiUser,
  grid: PiGridFour,
  book: PiBookBookmark,
  gallery: PiImage,
  link: PiLink,
  arrowRight: PiArrowRight,
  arrowUpRight: PiArrowUpRight,
  dots: PiDotsThree,
  email: PiEnvelope,
  globe: PiGlobe,
  github: FaGithub,
  linkedin: FaLinkedin,
  discord: FaDiscord,
  threads: FaThreads,
  x: PiX,
  code: PiCode,
  terminal: PiTerminal,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
