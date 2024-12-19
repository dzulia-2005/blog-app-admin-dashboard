import { useAtomValue } from "jotai";
import { PropsWithChildren } from "react";
import { loginAtom } from "../store";
import { Navigate, Outlet } from "react-router";

const UnAuthhorizeGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const user = useAtomValue(loginAtom);
  if (!user) {
    return <Navigate to={`/auth/sign-in`} />;
  }
  return children || <Outlet />;
};
export default UnAuthhorizeGuard;
