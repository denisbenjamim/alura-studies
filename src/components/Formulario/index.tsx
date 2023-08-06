import React from "react";
import Botao from "../Botao";
import style from './Formulario.module.scss';
import { Tarefa } from "../../pages/App";
import {v4 as uuidV4} from 'uuid';

class Formulario extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<Tarefa[]>> 
}> {
    state = {
        duracao: '00:00:00',
        descricao:''
    }

    adicionarTarefa(evento: React.FormEvent<HTMLElement>){
        evento.preventDefault();
        this.props.setTarefas(tarefas => [...tarefas, 
            {...this.state, 
                selecionado: false, 
                completado: false, 
                id: uuidV4()
            }]);
        this.setState({
            duracao: '00:00:00',
            descricao:''
        });   
    }

    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input 
                        type="text" 
                        name="tarefa" 
                        id="tarefa" 
                        value={this.state.descricao} 
                        onChange={evento => this.setState({...this.state, descricao: evento.target.value})}
                        placeholder="O que voce quer estudar" 
                        required={true} />
                </div>

                <div className={style.inputContainer}>
                    <label htmlFor="tempo">Tempo</label>
                    <input type="time" name="tempo" id="tempo" 
                        value={this.state.duracao} 
                        onChange={evento => this.setState({...this.state, duracao: evento.target.value})}
                        min="00:00" max="01:30:00" step="1" />
                </div>
                
                <Botao type="submit">
                    Submitar
                </Botao>
            </form>
        )
    }
}

export default Formulario