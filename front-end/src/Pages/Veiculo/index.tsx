import React, { useState, useEffect } from "react";
import { Veiculo } from "../../Models/Veiculo";
import api from "../../Services/api";
import { VeiculoForm } from "./VeiculoForm";
import { VeiculoTable } from "./VeiculoTable";

export const VeiculoPage: React.FC = () => {
  const URL = "api/veiculos/";
  const [lstVeiculos, setLstVeiculos] = useState<Veiculo[]>([]);
  const [veiculo, setVeiculo] = useState<Veiculo>(new Veiculo("", "", "", ""));
  const [tipo, setTipo] = useState<"inclusao" | "alteracao">("inclusao");

  const listar = () => {
    api.get<Veiculo[]>(URL).then((resp) => setLstVeiculos(resp.data));
  };

  useEffect(() => {
    listar();
  }, []);

  const handleForm = async (veiculo: Veiculo) => {
    let { id, marca, modelo, placa } = veiculo;

    if (tipo === "inclusao")
      await api.post(URL + "salvar", { marca, modelo, placa });

    if (tipo === "alteracao") {
      await api.put(URL + `atualizar/${id}`, { id, marca, modelo, placa });
      setTipo("inclusao");
    }

    listar();
    limpar();
  };

  const limpar = () => {
    setTipo("inclusao");
    setVeiculo(new Veiculo("", "", "", ""));
  };

  const handleDelete = async (id: string) => {
    await api.delete(URL + `deletar/${id}`);
    listar();
  };

  const handleEdit = (veiculo: Veiculo) => {
    setTipo("alteracao");
    setVeiculo(veiculo);
  };
  return (
    <>
      <VeiculoForm
        handleForm={handleForm}
        tipo={tipo}
        limpar={limpar}
        veiculo={veiculo}
      />
      <VeiculoTable
        handleDelete={handleDelete}        
        handleEdit={handleEdit}
        veiculos={lstVeiculos}
      />
    </>
  );
};
