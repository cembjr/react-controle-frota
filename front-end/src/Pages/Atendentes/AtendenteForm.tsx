import React, { useEffect, useState } from "react";
import Input from "../../Components/Input/Input";
import InputTelefone from "../../Components/InputTelefone/InputTelefone";

import { Atendente } from "../../Models/Atendente";
import { Form } from "../../Components/Form/Form";
import { DivFlex } from "../../Components/Div/DivFlex";
import { ButtonsSalvarLimpar } from "../../Components/Button/ButtonsSalvarLimpar";

interface AtendenteFormProps {
  tipo: "inclusao" | "alteracao";
  atendente: Atendente;
  handleForm(atendente: Atendente): void;
  limpar(): void;
}

const AtendenteForm: React.FC<AtendenteFormProps> = ({
  tipo,
  handleForm,
  atendente,
  limpar,
}) => {

  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");

  useEffect(() => {
    setNome(atendente.nome || "");
    setTelefone(atendente.telefone || " ");
  }, [atendente]);

  const titulo =
    tipo === "inclusao" ? "Cadastrar novo atendente" : "Alterar atendente";
  return (
    <>
      <Form> 
        <h1>{titulo}</h1>
        <Input label="Nome" value={nome} onChange={evt => setNome(evt.target.value)} />
        <DivFlex>
          <InputTelefone value={telefone} onChange={evt => setTelefone(evt.target.value)} />
          <ButtonsSalvarLimpar
            handleSalvar={() => handleForm({id: atendente.id, nome, telefone})}
            handleLimpar={limpar}
          />
        </DivFlex>
      </Form>
    </>
  );
};

export default AtendenteForm;
