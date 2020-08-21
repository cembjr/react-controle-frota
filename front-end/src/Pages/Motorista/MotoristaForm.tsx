import React, { useState, useEffect } from "react";
import { Motorista } from "../../Models/Motorista";
import { Form } from "../../Components/Form/Form";
import Input from "../../Components/Input/Input";
import InputTelefone from "../../Components/InputTelefone/InputTelefone";
import { ButtonsSalvarLimpar } from "../../Components/Button/ButtonsSalvarLimpar";
import { DivFlex } from "../../Components/Div/DivFlex";

interface MotoristaForm {
  tipo: string;
  motorista: Motorista;
  handleForm(motorista: Motorista): any;
  limpar(): void;
}

export const MotoristaForm: React.FC<MotoristaForm> = ({
  tipo,
  handleForm,
  limpar,
  motorista,
}) => {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cnh, setCnh] = useState("");

  useEffect(() => {
    setNome(motorista.nome || "");
    setTelefone(motorista.telefone || " ");
    setCnh(motorista.cnh || "");
  }, [motorista]);

  const titulo =
    tipo === "inclusao" ? "Cadastrar novo motorista" : "Alterar motorista";
  return (
    <>
      <Form width={"60%"}>
        <h1>{titulo}</h1>
        <Input
          label="Nome"
          value={nome}
          onChange={(evt) => setNome(evt.target.value)}
        />
        <DivFlex >
          <InputTelefone
            value={telefone}
            onChange={(evt) => setTelefone(evt.target.value)}
          />
          <Input
            label="CNH"
            value={cnh}
            onChange={(evt) => setCnh(evt.target.value)}
          />
          <ButtonsSalvarLimpar
          handleSalvar={() => handleForm({ id: motorista.id, nome, telefone, cnh })}
          handleLimpar={limpar}
        />
        </DivFlex>        
      </Form>
    </>
  );
};
