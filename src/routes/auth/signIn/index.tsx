import { lazy, Suspense } from "react";
import { Route } from "react-router";
import { SIGNIN_PATHS } from "../index.enum";


// eslint-disable-next-line react-refresh/only-export-components
const SignFormView = lazy(() =>
    import("@/pages/auth/views/sign-form-view"),
)
export const signInRoute = [
  <Route path={SIGNIN_PATHS.SignIn} element={<Suspense fallback={<div>loading...</div>}><SignFormView /></Suspense>} />
   
]