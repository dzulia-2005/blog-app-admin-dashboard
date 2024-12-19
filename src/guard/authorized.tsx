import { useAtomValue } from "jotai";
import { PropsWithChildren } from "react";
import { loginAtom } from "../store";
import { Navigate, Outlet } from "react-router";

const AuthhorizeGuard: React.FC<PropsWithChildren> = ({children}) => {
    const user = useAtomValue(loginAtom)
    if(user){
        return <Navigate to={`/dashboard/admin/users`}/>
    }
    return children || <Outlet />
}   
export default AuthhorizeGuard