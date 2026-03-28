import { useEffect, useState } from "react";
// Importamos desde el index.js del feature users
import { UserForm, getDocumentTypes } from "@/features/users";

export default function CreateUsersPage() {
    const [documentTypes, setDocumentTypes] = useState([]);

    useEffect(() => {
    // Consumimos el servicio encapsulado
    getDocumentTypes().then(setDocumentTypes);
    }, []);

    return (
    <div className="p-6">
        <h1 className="text-xl font-bold mb-4">Crear Usuario</h1>
      {/* Pasamos las opciones al formulario */}
        <UserForm documentTypes={documentTypes} />
    </div>
    );
}
