import React, { useState, useEffect } from "react";
import api from "../../Services/api";

import { MotoristaForm } from "./MotoristaForm";
import { Motorista } from "../../Models/Motorista";
import { MotoristaTable } from "./MotoristaTable";
import FuncoesUtilitarias from "../../Utils/FuncoesUtilitarias";

const MotoristasPage: React.FC = () => {
  const URL = "api/motoristas/";
  const [lstMotoristas, setLstMotoristas] = useState<Motorista[]>([]);
  const [motorista, setMotorista] = useState<Motorista>(new Motorista());
  const [tipo, setTipo] = useState<"inclusao" | "alteracao">("inclusao");

  const listar = () => {
    api.get<Motorista[]>(URL).then((resp) => setLstMotoristas(resp.data));
  };

  useEffect(() => {
    listar();
  }, []);

  const handleForm = async (motorista: Motorista) => {
    let { id, nome, telefone, cnh } = motorista;
    
    telefone = FuncoesUtilitarias.removerCaracteresInvalidos(telefone);

    if (tipo === "inclusao")
      await api.post(URL + "salvar", { nome, telefone, cnh });

    if (tipo === "alteracao") {
      await api.put(URL + `atualizar/${id}`, { id, nome, telefone, cnh });
      setTipo("inclusao");
    }

    listar();
    limpar();
  };

  const limpar = () => {      
    setTipo("inclusao");
    setMotorista(new Motorista());
  };

  const handleDelete = async (id: string) => {
    await api.delete(URL + `deletar/${id}`);
    listar();
  };

  const handleEdit = (motorista: Motorista) => {
    setTipo("alteracao");
    setMotorista(motorista);
  };

  return (
    <>
      <MotoristaForm
        handleForm={handleForm}
        tipo={tipo}
        limpar={limpar}
        motorista={motorista}
      />
      <MotoristaTable
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        motoristas={lstMotoristas}
      />
    </>
  );
};

export default MotoristasPage;
