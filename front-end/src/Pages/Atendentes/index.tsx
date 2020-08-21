import React, { useState, useCallback, useEffect } from "react";
import AtendenteForm from "./AtendenteForm";
import { AtendentesTable } from "./AtendetesTable";
import { Atendente } from "../../Models/Atendente";
import api from "../../Services/api";
import FuncoesUtilitarias from "../../Utils/FuncoesUtilitarias";

const AtendentesPage: React.FC = () => {
  const url = "api/atendentes";
  const [tipo, setTipo] = useState<"inclusao" | "alteracao">("alteracao");
  const [lstAtendentes, setLstAtendentes] = useState<Atendente[]>([]);
  const [atendente, setAtendente] = useState<Atendente>(new Atendente());

  const obterListaAtendentes = useCallback(() => {
    api
      .get<Atendente[]>(url)
      .then((resp) =>
        setLstAtendentes(() =>
          resp.data.sort((a, b) => a.nome.localeCompare(b.nome))
        )
      );
  }, []);

  const limpar = useCallback((): void => {
    setTipo("inclusao");
    obterListaAtendentes();
    setAtendente(new Atendente());
  }, [setTipo, obterListaAtendentes, setAtendente]);

  const handleForm = async (atendente: Atendente): Promise<void> => {
    let { id, nome, telefone } = atendente;
    telefone = FuncoesUtilitarias.removerCaracteresInvalidos(telefone);

    if (!nome || !telefone) {
      alert("Nome e Telefone obrigatórios.");
      return;
    }

    if (tipo === "inclusao")
      await api.post(url, {
        nome,
        telefone,
      });

    if (tipo === "alteracao")
      await api.put(`${url}/atualizar/${id}`, {
        id,
        nome,
        telefone,
      });

    limpar();
  };


  useEffect(() => {
    limpar();
  }, [limpar]);

  const alterarTipo = (tipo: "inclusao" | "alteracao") => {
    setTipo(tipo);
  };

  const handleEdit = (atd: Atendente) => {
    alterarTipo("alteracao");
    setAtendente(atd);
  };

  const handleDelete = async (id: string) => {
    await api.delete(`${url}/deletar/${id}`);
    limpar();
  };

  return (
    <>
      <AtendenteForm
        tipo={tipo}
        atendente={atendente}
        handleForm={handleForm}
        limpar={limpar}
      />
      <br />
      <AtendentesTable
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        atendentes={lstAtendentes}
      />
    </>
  );
};

export default AtendentesPage;
