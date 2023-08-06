import { Tarefa } from "../../../pages/App";
import style from './Item.module.scss';

export interface ItemLista extends Tarefa {
    selecionarTarefa: (tarefaSelecionada: Tarefa) => void
}

export default function item({descricao, duracao, selecionado, completado ,id, selecionarTarefa} : ItemLista){
    return  (
        <li id={id} className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado : ''}`} onClick={() => !completado && selecionarTarefa({descricao, duracao, selecionado, completado ,id})} >
            <h3>{descricao}</h3>
            <span>{duracao}</span>
            {completado && <span className={style.concluido} aria-label="Tarefa completa" ></span>}
        </li>
    )
}