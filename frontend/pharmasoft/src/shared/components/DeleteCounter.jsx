// // Hook UseState 
// import { useState } from "react";

// export default function Deletecounter(){
//     //State es el valor actual del estado 
//     //SetState es la función que se utiliza para actualizar el estado
//     //useState en el valor inicial del estado 

    // const [count , setCount] = useState(0);

//     return(
//         <>
//         <p>Counter: {count} </p>
//         <button onClick = {() => setCount(count+1)}>Incrementar</button>
//         </>
//     );
// }


// =========================================================================================================================
// ===================================================CONTADOR==============================================================
// =========================================================================================================================

export default function DeleteCounter(){

    let count = 0;

    const incrementar = () => {
        count = count + 1;
        console.log("El nuevo valor es", count);
    }

    return(
        <>
        <p>Contador: {count}</p>
        <button onClick={incrementar}>Incrementar</button>
        </>
    );
};

// 1-React solo actualiza la interfaz cuando usamos use state.
// 2-La UIn este último ejemplo deja de actualizarse porque No
// estamos llamando a setCount, que es mecanismo que le indica
// a react que debe re-renderizar.
// 3- Cada vez que llamamos a setCount, le estamos diciendo a 
// React que el estado debe actualizarse y el componente debe de 
// volver a renderizarse.*/

/*
*Hook UseEffect con una dependencia
*
* Entender que useEffect swe vuelve a ejecutsar cuando cambia una dependencia 
*  - useEffect puede ejecutarse otra vez si algo cambia 
*  - Ese algo se declara en el array de dependencias
*
*/

    