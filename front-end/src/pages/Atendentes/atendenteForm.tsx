import React from "react";
import Input from "../../components/Input/input";
import InputTelefone from "../../components/InputTelefone/input-telefone";
import DefaultButton from "../../components/Button/DefaultButton";

import { Atendente } from "../../Models/Atendente";

interface AtendenteFormProps {
  tipo: "inclusao" | "alteracao";
  atendente?: Atendente;
  nome: string;
  telefone: string;
  handleForm(): void;
  handleNomeChange(evt: React.ChangeEvent<HTMLInputElement>): void;
  handleTelefoneChange(evt: React.ChangeEvent<HTMLInputElement>): void;
  limpar(): void
}

const AtendenteForm: React.FC<AtendenteFormProps> = ({ tipo, atendente, nome, telefone, handleForm, handleNomeChange, handleTelefoneChange, limpar }) => {

  return (
    <>
      <form autoComplete="off">
        <h1>
          {tipo === "inclusao"
            ? "Cadastrar novo atendente"
            : "Alterar atendente"}
        </h1>
        {atendente && <Input type="hidden" value={atendente.id} />}
        <Input label="Nome" value={nome} onChange={handleNomeChange} />
        <InputTelefone value={telefone} onChange={handleTelefoneChange} />

        <DefaultButton onClick={handleForm}>Salvar</DefaultButton>
        <DefaultButton onClick={limpar} cor="secondary">Limpar</DefaultButton>
      </form>
    </>
  );
};

export default AtendenteForm;
