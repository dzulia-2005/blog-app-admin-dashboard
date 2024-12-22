import { Navigate, Route, Routes } from 'react-router'
import DashboardLayout from '@/layout/dashboard'
import AuthLayout from '@/layout/auth'
import Authhorized from "@/guard/authorized";
import UnAuthhorized from "@/guard/unauthorized";
import { AUTH_ROUTES } from './auth'
import { ADMIN_ROUTE } from './dashboard';

const AppRoute = () => {
  return (
    <Routes>
       <Route
         path="auth"
         element={
           <Authhorized>
             <AuthLayout />
           </Authhorized>
         }
       >
           {AUTH_ROUTES}
       </Route>
       <Route
         path="dashboard"
         element={
           <UnAuthhorized>
             <DashboardLayout />
           </UnAuthhorized>
         }
         >
             {ADMIN_ROUTE}
       </Route>
     
       <Route path="/" element={<Navigate to="/auth/sign-in" />}></Route>
     </Routes>
  )
}

export default AppRoute