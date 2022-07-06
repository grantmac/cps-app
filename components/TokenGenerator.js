import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getToken } from "../redux/appSlice";

export function TokenGenerator(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getToken());
  }, []);
  return <></>;
}
