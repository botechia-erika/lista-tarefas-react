import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton
} from "./styled";
import bin from "../../assets/bin.png";

export function ListaTarefas() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [lista, setLista] = useState([
    "estudar react",
    "almoçar",
    "feedback exercicios"
  ]);
  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };
  const removeTarefa = (tarefa) => {
    const listaFiltrada = lista.filter((item) => {
      return item !== tarefa;
    });
    setLista(listaFiltrada);
  };
  const renderizaNaTela = lista.map((tarefa, index) => {
    return (
      <Tarefa key={index}>
        <p>
          #0{index + 1} - {tarefa}
        </p>
        <RemoveButton onClick={() => removeTarefa(tarefa)}>
          <img src={bin} alt="" width="16px" />
        </RemoveButton>
      </Tarefa>
    );
  });
  const adicionaTarefa = () => {
    // nova lista faz spread operathor de lista isso é copia a lista em novo array
    // faço o push em novaLista com novaTarefa e concateno arrays
    //faço um setLista em novaLista para atualizar valor
    // limpar nova tarefa para iniciar com string vazia
    const novaLista = [...lista];
    novaLista.push(novaTarefa);
    setLista(novaLista);
    setNovaTarefa("");
  };

  /* função para filtros
  const filtrarLista = lista.filter((item) => {
    return item === "estudar react";
  });
   console.log(filtrarLista);
  */
  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>

      <ListaContainer>
        <ul>{renderizaNaTela}</ul>
      </ListaContainer>
    </ListaTarefasContainer>
  );
}
