import React from "react";
import style from "./Relogio.module.scss";

export default function Relogio({tempo = 0}:{tempo: number|undefined}){
    const [hd1, hd2] = String(Math.floor(tempo / 60)).padStart(2,'0');
    const [md1, md2] = String(tempo % 60).padStart(2,'0');
    
    return (
        <React.Fragment>
            <span className={style.relogioNumero} >{hd1}</span>
            <span className={style.relogioNumero} >{hd2}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero} >{md1}</span>
            <span className={style.relogioNumero} >{md2}</span>
        </React.Fragment>
    );
}