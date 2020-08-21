import React, { useState, useEffect } from "react";
import { Form } from "../../Components/Form/Form";
import Input from "../../Components/Input/Input";
import { ButtonsSalvarLimpar } from "../../Components/Button/ButtonsSalvarLimpar";
import { DivFlex } from "../../Components/Div/DivFlex";
import { Veiculo } from "../../Models/Veiculo";

interface VeiculoFormProps {
  tipo: string;
  veiculo: Veiculo;
  handleForm(veiculo: Veiculo): any;
  limpar(): void;
}

export const VeiculoForm: React.FC<VeiculoFormProps> = ({ tipo, veiculo, handleForm, limpar }) => {
    const [marca, setMarca] = useState("");
    const [modelo, setModelo] = useState("");
    const [placa, setPlaca] = useState("");
  
    useEffect(() => {
      setMarca(veiculo.marca);
      setModelo(veiculo.modelo);
      setPlaca(veiculo.placa)
    }, [veiculo]);
  
    const titulo =
      tipo === "inclusao" ? "Cadastrar novo veiculo" : "Alterar veiculo";
    
    return(
        <>
         <Form width={"60%"}>
        <h1>{titulo}</h1>
        <DivFlex >
        <Input
          label="Marca"
          value={marca}
          onChange={(evt) => setMarca(evt.target.value)}
        />
        
          <Input
            label="Modelo"
            value={modelo}
            onChange={(evt) => setModelo(evt.target.value)}
          />
          </DivFlex>
          <DivFlex>
          <Input
            label="Placa"
            value={placa}
            onChange={(evt) => setPlaca(evt.target.value)}
          />
          <ButtonsSalvarLimpar
          handleSalvar={() => handleForm({ id: veiculo.id, marca, modelo, placa })}
          handleLimpar={limpar}
        />
        </DivFlex>        
      </Form>
        </>
    );
};