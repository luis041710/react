import Input from "@/shared/components/Input";
import Button from "@/shared/components/Button";
import Select from "@/shared/components/Select";
import "@/features/users/services/selectService";
import { useEffect, useState } from "react";
import { getDocumentTypes } from "../services/selectService";
// import { FileInput } from "@/shared/components";
import { AvatarUploader } from "@/shared/components";

export default function UserForm() {

    const [avatarUrl, setAvatarUrl] = useState(null);


    const [documentTypes, setDocumentTypes] = useState([]);

  useEffect(() => {
    getDocumentTypes().then(setDocumentTypes);
  }, []);

  // const handleNameChange = (e) => {
  //     console.log("Nombre del usuario:", e.target.value)
  // };
  const handleEmailBlur = (e) => {
    console.log("E-mail del usuario:", e.target.value);
  };

  // Una validación básica

  const handleNameChange = (e) => {
    console.log("Nombre del usuario:", e.target.value);

    if (e.target.value === "") {
      console.log("Este campo no puede estar vacío");
    }
  };

  return (
    <div>
      {/* Formulario para crear el usuario */}

      <form
        className="
                    px-6 py-12
                    grid grid-cols-1 gap-6
                    bg-white/40
                    dark:bg-neutral-800/15
                    backdrop-blur-sm
                    shadow-xl
                    ring-1
                    rounded-xl
                    z-10
                    "
      >
        <Input
          label="Nombre"
          placeholder="Ingrese su nombre"
          onChange={handleNameChange} //Se da cuando ingreso datos en un imput
        ></Input>

        <Input
          label="E-mail"
          placeholder="Ingrese su E-mail"
          onBlur={handleEmailBlur} //Se da cuando ingreso datos en un imput
        ></Input>

        <Select
          label="Tipo de documento"
          name="documentType"
          options={documentTypes}
        ></Select>

        <div className="w-[320px] text-white">
          <AvatarUploader onChange={setAvatarUrl} />
          {avatarUrl && (
            <p className="mt-4 text-sm text-gray-400">
              URL guardada en BD: {avatarUrl}
            </p> 
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-center gap-12 py-6">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => console.log("Oprimió cancelar")}
          >
            Cancelar
          </Button>
          <Button
            variant="primary"
            size="md"
            type="submit"
            onSubmit={() => console.log("Oprimió guardar")}
          >
            Guardar
          </Button>
        </div>
      </form>
    </div>
  );
}
