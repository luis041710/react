// import Navbar from "@/shared/Layout/Navbar";
import { Outlet } from "react-router-dom";
import authBg from "@/assets/images/11-auth-background.jpg"
// import UserForm from "./../../features/users/components/UserForm"
import { UserForm } from "../../features/users";
import Navbar from "@/shared/layouts/Navbar"
 
export default function AuthLayout(){
    return(
        <div className="relative min-h-screen w-full flex items-center justify-center text-black"
                style={
                    {
                        backgroundImage: `url(${authBg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }
                }
                >
                {/* <div className="absolute inset-0 bg-black/50"></div> */}

            {/* Contenido externo que se inyecta */}
            <main className="mx-auto w-full max-w-2xl px-4 py-8">
                <Outlet />
            </main>
        </div>
    );
};