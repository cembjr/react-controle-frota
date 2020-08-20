import React from "react";
import Input from "../../Components/Input/Input";
import InputTelefone from "../../Components/InputTelefone/InputTelefone";

import { Atendente } from "../../Models/Atendente";
import { Form } from "../../Components/Form/Form";
import { DivFlex } from "../../Components/Div/DivFlex";
import { ButtonsSalvarLimpar } from "../../Components/Button/ButtonsSalvarLimpar";

interface AtendenteFormProps {
  tipo: "inclusao" | "alteracao";
  atendente?: Atendente;
  nome: string;
  telefone: string;
  handleForm(): void;
  handleNomeChange(evt: React.ChangeEvent<HTMLInputElement>): void;
  handleTelefoneChange(evt: React.ChangeEvent<HTMLInputElement>): void;
  limpar(): void;
}

const AtendenteForm: React.FC<AtendenteFormProps> = ({
  tipo,
  nome,
  telefone,
  handleForm,
  handleNomeChange,
  handleTelefoneChange,
  limpar,
}) => {
  const titulo =
    tipo === "inclusao" ? "Cadastrar novo atendente" : "Alterar atendente";
  return (
    <>
      <Form> 
        <h1>{titulo}</h1>
        <Input label="Nome" value={nome} onChange={handleNomeChange} />
        <DivFlex>
          <InputTelefone value={telefone} onChange={handleTelefoneChange} />
          <ButtonsSalvarLimpar
            handleSalvar={handleForm}
            handleLimpar={limpar}
          />
        </DivFlex>
      </Form>
    </>
  );
};

export default AtendenteForm;
