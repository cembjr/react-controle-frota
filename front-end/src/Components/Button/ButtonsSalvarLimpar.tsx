import React from "react";
import { FormButtons } from "./FormButtons";
import DefaultButton from "./DefaultButton";

interface ButtonsSalvarLimparProps{
    handleSalvar: any;
    handleLimpar: any;
}

export const ButtonsSalvarLimpar: React.FC<ButtonsSalvarLimparProps> = ({ handleSalvar, handleLimpar}) => {
  return (
    <>
      <FormButtons>
        <DefaultButton action={handleSalvar}>Salvar</DefaultButton>
        <DefaultButton action={handleLimpar} cor="secondary">
          Limpar
        </DefaultButton>
      </FormButtons>
    </>
  );
};
