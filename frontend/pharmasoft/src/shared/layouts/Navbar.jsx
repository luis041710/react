import { Search, User } from "lucide-react";
import { Link } from "react-router-dom";
// import { useState } from "react";
import {
  IconButton,
  // IconAction,
  Dropdown,
  DropdownTrigger,
  DropdownItem,
  DropdownContent,
} from "@/shared/components";

const Navbar = ({variant = "solid"}) => {
  // const navigate = 

    // const [isOpen, setIsOpen] = useState(false);

  return (
    // Estos son los estilos del navbar para que quede transparente
    <nav className= {`w-full border-b transition-colors duration-300 ${
      variant === "transparent"
      ? "bg-transparent border-transparent absolute top-0 left-0 z-30"
      : "bg-background border-border" 
    }`}>

      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo de marca */}
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">
              Rico Programar
            </Link>
          </div>

          {/* Links de navegación */}
          <ul className="hidden md:flex items-center gap-6">
            <li>
              <Link to="/" className="hover:text-primary transition">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/usuario" className="hover:text-primary transition">
                Usuario
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="hover:text-primary transition">
                Contacto
              </Link>
            </li>
            <li>
              <Link to="/listar" className="hover:text-primary transition">
                Listar
              </Link>
            </li>
          </ul>


          {/* Sección derecha: búsqueda + usuario */}
          <div className="flex items-center gap-4">
            
            {/* Buscador */}
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-500" />
            
              <input
                type="text"
                placeholder="Buscar..."
                className="pl-9 pr-4
                py-2.5 border rounded-lg text-body focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

          {/* ======== Dropdown ======== */}
          <div className="p-10">
                <Dropdown>
                  <DropdownTrigger>
                    <IconButton ariaLabel="Menu de usuario">
                      <User/>
                    </IconButton>
                  </DropdownTrigger>

                  <DropdownContent className="rigth-0 w-48">
                    <DropdownItem>
                      <Link to="/login" className="block w-full">
                        Perfil
                      </Link>
                    </DropdownItem>

                    <DropdownItem>
                      <Link to="/login" className="block w-full">
                        Configuracion
                      </Link>
                    </DropdownItem>

                    <DropdownItem>
                      <Link to="/login" className="block w-full">
                        Cerrar Sesion
                      </Link>
                    </DropdownItem>

                    <DropdownItem>
                      <Link to="/login" className="block w-full">
                        Usuario
                      </Link>
                    </DropdownItem>
                  </DropdownContent>
                </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;

// Para dirigirme o navegar a una ruta uso Link
// Para ejecutar logica se utiliza button