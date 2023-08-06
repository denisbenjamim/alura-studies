import { IListaProps } from "../../pages/App";
import style from './Lista.module.scss';
import Item from './Item';

function Lista ({tarefas, selecionarTarefa} : IListaProps) {
    
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do Dia</h2>
           
            <ul>
            {tarefas.map((tarefa) => 
               <Item key={tarefa.id} {...tarefa} selecionarTarefa={selecionarTarefa} />
            )}
            </ul>
        </aside>
    )
}

export default Lista;