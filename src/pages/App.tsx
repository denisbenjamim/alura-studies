import React, { useState } from 'react';

import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './style.module.scss'
import Cronometro from '../components/Cronometro';

export interface Tarefa {
  descricao: string,
  duracao: string,
  selecionado: boolean, 
  completado:boolean ,
  id: string
}

export interface IListaProps {
  tarefas: Tarefa[],
  selecionarTarefa: (tarefaSelecionada: Tarefa) => void
}

function App() {
  const [tarefas , setTarefas] = useState<Tarefa[]|[]>([]) 
  const [tarefaSelecionada, setTarefaSelcionada] = useState<Tarefa>();

  function selecionarTarefa(tarefa:Tarefa){
    setTarefaSelcionada(tarefa);
    setTarefas(tarefasAnteriores => 
      tarefasAnteriores.map(tarefaAnterior => ({
        ...tarefaAnterior, 
        selecionado : tarefaAnterior.id === tarefa.id
      }))
    );
  }

  function finalizarTarefa(){
    if(tarefaSelecionada){
      setTarefaSelcionada(undefined);

      setTarefas(tarefas => tarefas.map(tarefa => {
          if(tarefa.id === tarefaSelecionada.id){
            return {
              ...tarefa,
              selecionado: false,
              completado: true
            }
          }
          return tarefa;
        })
      );
    }
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}  />
      <Lista tarefas={tarefas} selecionarTarefa={selecionarTarefa}/>
      <Cronometro 
        selecionado={tarefaSelecionada} 
        finalizarTarefa={finalizarTarefa}
      />
    </div>
  );
}

export default App;
