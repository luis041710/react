import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../../shared/layouts/MainLayout";
import ProfilePage from "@/features/users/pages/ProfilePage"
import HomePage from "../../features/home/pages/HomePage";
import AuthLayout from "../../shared/layouts/AuthLayout";
import { CreateUsersPage } from "../../features/users/index.js";
import ConfigUserPage from "../../features/users/pages/ConfigUserPage.jsx"
// import { ListUserPage } from "../../features/users/pages/ListUserPage.jsx";
import { ListUserPage } from "@/features/users";

const router = createBrowserRouter([
    {
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <HomePage />                
            },
            {
                path:"usuario", 
                element: <ConfigUserPage/>
            },
            {
                path:"users/:id/edit", 
                element: <HomePage/>
            },
            {
                path:"contacto", 
                element: <h1 className="p-4">Contactos</h1>
            },
            {
                path:"listar", 
                element: <ListUserPage/>
            },
            {
                path:"perfil", 
                element: <ProfilePage />
            },
        ]
    },
    {

        element: <AuthLayout/>,
        children: [
            {
                path: "login",
                element: <AuthLayout />                
            },
            {
                path:"forgot-password", 
                element: <h1 className="p-4">Recuperar mi contraseña</h1>
            },
            {
                path:"reset-password", 
                element: <h1 className="p-4">Resetear mi contraseña</h1>
            },
        ]
    }
])

export default router;
    







