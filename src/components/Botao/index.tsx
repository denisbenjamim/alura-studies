
import React from "react";
import style from'./Botao.module.scss';

interface Props {
    children: React.ReactNode,
    type?: 'button' | 'submit' | 'reset',
    onClick?: () => void,
}

export default function Botao({type = "button", children, onClick}:Props) {
    return (
        <button onClick={onClick} type={type} className={style.botao}>
            {children}
        </button>
    )   
}