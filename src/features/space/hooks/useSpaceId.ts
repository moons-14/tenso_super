import { useLocation } from "react-router-dom";

export const useSpaceId = () => {
  const { pathname } = useLocation();
  return decodeURI(pathname.split("/").slice(-1)[0]);
};
