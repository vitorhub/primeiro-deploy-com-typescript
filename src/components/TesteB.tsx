import React from "react"

export const TesteB = () => {

    function Concatena(numero: number, texto: string ){
        return numero + texto
    }

    return(
        <h2> { Concatena(22 , " texto") } </h2>
    )
}