// useEffect es un hook que permite ejecutar efectos secundarios en componentes funcionales
// Un efecto secundario en cualquier operación que:
// 1- Ocurre fuera del render 
// 2- Interactua con el mundo exterior al componente 
// Ejemplos: 
// 1- Llamadas a APIs
// 2- Manipulación del DOM
// 3- Actualizar un título del navegador
// 
// 
// ======SINTAXIS======
// useEffect(() => {
//      efecto *          -Código que se ejecuta.
// }), [];                -En los corchetes se coloca el arreglo de las dependencias.
// 
// 



// ==========Efecto con array vacio

import { useEffect, useState } from "react";

function DeleteUseEffect(){
    const[ count, setCount] = useState(0);
    const [message, setMessage] = useState("El contador No ha cambiado")

    useEffect(() => {
        setMessage(`El contador ha cambiado a ${count}`);
    },[count]);
  
   return (
        <>
            <h2>{count}</h2>
            <p>{message}</p>

            <button className="border border-border p-2" onClick={() => setCount(count + 1)}>
                Botón de incremento
            </button>
        </>
    );
};

export default DeleteUseEffect;
/*
IMPORTANTE 
 - Si una dependencia cambia el efecto se ejecuta 
 - Si no cambia el efecto no se ejecuta
 - 
 
 
 */


