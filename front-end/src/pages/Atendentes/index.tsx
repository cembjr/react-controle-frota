import React, { useState, useCallback, useEffect } from "react";
import AtendenteForm from "./Form/atendenteForm";
import ListaAtendentes from "./listaAtendentes";
import { Atendente } from "../../Models/Atendente";
import api from "../../services/api";
import FuncoesUtilitarias from "../../utils/FuncoesUtilitarias";

const Atendentes: React.FC = () => {
  const url = "api/atendente";
  const [tipo, setTipo] = useState<"inclusao" | "alteracao">("alteracao");
  const [lstAtendentes, setLstAtendentes] = useState<Atendente[]>([]);
  const [atendente, setAtendente] = useState<Atendente>();

  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");

  useEffect(() => {
      setNome(atendente?.nome|| "");
      setTelefone(atendente?.telefone || " ");
  }, [atendente]);

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
    setNome("");
    setTelefone(" ");
    setTipo("inclusao");
    obterListaAtendentes();
  }, [setNome, setTelefone, setTipo, obterListaAtendentes]);

  const handleForm = async (): Promise<void> => {
    const tel = FuncoesUtilitarias.removerCaracteresNaoNumericos(telefone);
    if (!nome || !tel) {
      alert("Nome e Telefone obrigatórios.");
      return;
    }

    if (tipo === "inclusao")
      await api.post(url, {
        nome,
        telefone: tel,
      });

    if (tipo === "alteracao") {
      const id = atendente?.id;
      await api.put(`${url}/atualizar/${id}`, {
        id,
        nome,
        telefone: tel,
      });
    }

    limpar();
  };

  const handleNomeChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setNome(evt.target.value);
  };

  const handleTelefoneChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setTelefone(evt.target.value);
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
        nome={nome}
        telefone={telefone}
        handleForm={handleForm}
        handleNomeChange={handleNomeChange}
        handleTelefoneChange={handleTelefoneChange}
        limpar={limpar}
      />
      <br />
      <ListaAtendentes
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        atendentes={lstAtendentes}
      />
    </>
  );
};

export default Atendentes;
