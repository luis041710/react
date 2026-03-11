import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../../shared/layouts/MainLayout";
import ProfilePage from "@/features/users/pages/ProfilePage"
import HomePage from "../../features/home/pages/HomePage";
import AuthLayout from "../../shared/layouts/AuthLayout";
import { CreateUsersPage } from "../../features/users/index.js";

const router = createBrowserRouter([
    {
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <HomePage />                
            },
            {
                path:"cursos", 
                element: <h1 className="p-4">Cursos</h1>
            },
            {
                path:"contacto", 
                element: <h1 className="p-4">Contactos</h1>
            },
            {
                path:"videos", 
                element: <h1 className="p-4">Videos</h1>
            },
            {
                path:"perfil", 
                element: <CreateUsersPage />
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
    







