import React, { useState, useEffect, useCallback } from "react";
import { ServicoService } from "../../Services/ServicoService";

import { ServicosTable } from "./ServicosTable";
import { ServicosForm } from "./ServicosForm";
import { Servico } from "../../Models/Servico";

export const ServicosPage: React.FC = () => {
  const [servicoService] = useState<ServicoService>(new ServicoService());
  const [lstServicos, setLstServicos] = useState<Servico[]>([]);
  const [servico, setServico] = useState<Servico | undefined>();
  const [tipo, setTipo] = useState<"inclusao" | "alteracao">("inclusao");

  const listar = useCallback(() => {
    servicoService.listar().then((resp) => setLstServicos(resp.data));
  }, [servicoService]);

  useEffect(() => {
    listar();
  }, [listar]);

  const handleForm = async (servico: Servico) => {
    
    if (tipo === "inclusao") await servicoService.salvar(servico);

    if (tipo === "alteracao") {
      await servicoService.atualizar(servico, servico.id);
      setTipo("inclusao");
    }

    listar();
    limpar();
  };

  const limpar = () => {
    setTipo("inclusao");
    setServico(new Servico());
  };

  const handleDelete = async (id: string) => {
    await servicoService.deletar(id);
    listar();
  };

  const handleEdit = (servico: Servico) => {
    setTipo("alteracao");
    setServico(servico);
  };

  return (
    <>
      <ServicosForm
        handleForm={handleForm}
        tipo={tipo}
        limpar={limpar}
        servico={servico}
      ></ServicosForm>
      <ServicosTable
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        servicos={lstServicos}
      ></ServicosTable>
    </>
  );
};
