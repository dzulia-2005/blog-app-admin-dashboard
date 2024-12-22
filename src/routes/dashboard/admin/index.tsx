import { lazy, Suspense } from "react";
import { Route } from "react-router";
import {ADMIN_PATHS} from '../../dashboard/index.enum.ts'

// eslint-disable-next-line react-refresh/only-export-components
const AdminUsersView = lazy(() =>
    import("@/pages/admin/users/users-list"),
)

// eslint-disable-next-line react-refresh/only-export-components
const UserCreateView = lazy(() => 
    import("@/pages/admin/users/user-create")
)

// eslint-disable-next-line react-refresh/only-export-components
const UserUpdateView = lazy(() => 
    import("@/pages/admin/users/user-update")
)

// eslint-disable-next-line react-refresh/only-export-components
const AdminBlogsView = lazy(() => 
    import("@/pages/admin/blogs/blog-list/blogs")
)

// eslint-disable-next-line react-refresh/only-export-components
const BlogsCreateView = lazy(() => 
    import("@/pages/admin/blogs/blog-create")
)

// eslint-disable-next-line react-refresh/only-export-components
const BlogsUpdateView = lazy(()=> 
    import("@/pages/admin/blogs/blog-update")
)



export const adminRoute = [
         <Route 
            path={ADMIN_PATHS.Users} 
            element={
                <Suspense fallback={<div>loading...</div>}>
                    <AdminUsersView/>
                </Suspense>
        } 
         />,

         <Route
            path={ADMIN_PATHS.User_Create}
            element={
                <Suspense fallback={<div>loading...</div>}>
                    <UserCreateView/>
                </Suspense>
                }
         />,

         <Route
            path={ADMIN_PATHS.User_Update }
            element={
                <Suspense fallback={<div>loading...</div>}>
                    <UserUpdateView/>
                </Suspense>
                }
         />,

         <Route
            path={ADMIN_PATHS.User_blog}
            element = {
                <Suspense fallback={<div>loading...</div>}>
                   <AdminBlogsView/>
                </Suspense>
        }
         />,

         <Route
            path={ADMIN_PATHS.Blog_Create}
            element={
                <Suspense fallback={<div>loading...</div>}>
                    <BlogsCreateView/>
                </Suspense>
                    } 
         />,

         <Route
            path={ADMIN_PATHS.Blog_Update }
            element={
                 <Suspense fallback={<div>loading...</div>}>
                    <BlogsUpdateView/>
                 </Suspense>
        }
         />
]
