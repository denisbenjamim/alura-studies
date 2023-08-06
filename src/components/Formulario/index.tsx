import React, {useState} from "react";
import Botao from "../Botao";
import style from './Formulario.module.scss';
import { Tarefa } from "../../pages/App";
import {v4 as uuidV4} from 'uuid';

interface IFormulario{
    setTarefas: React.Dispatch<React.SetStateAction<Tarefa[] | []>>
}

export default function Formulario({setTarefas}:IFormulario) {
    const TAREFA_INICIAL = {
        duracao: '00:00:00',
        descricao: ''
    };
    const [tarefa, setTarefa] = useState(TAREFA_INICIAL);

    function adicionarTarefa(evento: React.FormEvent<HTMLElement>){
        evento.preventDefault();
        setTarefas(tarefas => [...tarefas, 
            {...tarefa, 
                selecionado: false, 
                completado: false, 
                id: uuidV4()
            }]);
        setTarefa({
            duracao: '00:00:00',
            descricao:''
        });   
    }

    return (
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">
                    Adicione um novo estudo
                </label>
                <input 
                    type="text" 
                    name="tarefa" 
                    id="tarefa" 
                    value={tarefa.descricao} 
                    onChange={evento => setTarefa({...tarefa, descricao: evento.target.value})}
                    placeholder="O que voce quer estudar" 
                    required={true} />
            </div>

            <div className={style.inputContainer}>
                <label htmlFor="tempo">Tempo</label>
                <input type="time" name="tempo" id="tempo" 
                    value={tarefa.duracao} 
                    onChange={evento => setTarefa({...tarefa, duracao: evento.target.value})}
                    min="00:00" max="01:30:00" step="1" />
            </div>
            
            <Botao type="submit">
                Submitar
            </Botao>
        </form>
    )
}
