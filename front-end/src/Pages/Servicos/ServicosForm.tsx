import React, { useState, useEffect, useCallback } from "react";
import { Atendente } from "../../Models/Atendente";
import { Motorista } from "../../Models/Motorista";
import { Veiculo } from "../../Models/Veiculo";
import { ServicoService } from "../../Services/ServicoService";
import { DivFlex } from "../../Components/Div/DivFlex";
import InputTelefone from "../../Components/InputTelefone/InputTelefone";
import { ButtonsSalvarLimpar } from "../../Components/Button/ButtonsSalvarLimpar";
import { Servico } from "../../Models/Servico";
import { InputData } from "../../Components/InputData/InputData";
import Input from "../../Components/Input/Input";
import { Form } from "../../Components/Form/Form";
import { SimpleSelect } from "../../Components/Select/SimpleSelect";
import { KeyValue } from "../../Models/KeyValue";

interface ServicosFormProps {
  titulo: string;
}

export const ServicosForm: React.FC<ServicosFormProps> = ({ titulo }) => {
  const [atendentes, setAtendentes] = useState<Atendente[]>([]);
  const [motoristas, setMotoristas] = useState<Motorista[]>([]);
  const [veiculos, setVeiculos] = useState<Veiculo[]>([]);

  const [dataSaida, setDataSaida] = useState<Date>(new Date());
  const [dataChegada, setDataChegada] = useState<Date | null>(null);
  const [destino, setDestino] = useState("");
  const [observacao, setObservacao] = useState("");
  const [kmInicial, setKmInicial] = useState(0);
  const [kmFinal, setKmFinal] = useState(0);
  const [idMotorista, setIdMotorista] = useState("");
  const [idAtendente, setIdAtendente] = useState("");
  const [idVeiculo, setIdVeiculo] = useState("");

  const [servicoService] = useState<ServicoService>(new ServicoService());

  const carregarListar = useCallback(() => {
    servicoService.obterAtendentes().then((resp) => setAtendentes(resp.data));
    servicoService.obterMotoristas().then((resp) => setMotoristas(resp.data));
    servicoService.obterVeiculo().then((resp) => setVeiculos(resp.data));
  }, [servicoService]);

  useEffect(() => {
    carregarListar();
  }, [carregarListar]);

  const preencher = (servico: Servico) => {
    setDataSaida(servico.dataSaida);
    setDataChegada(servico.dataChegada);
    setDestino(servico.destino);
    setObservacao(servico.observacao);
    setKmInicial(servico.kmInicial);
    setKmFinal(servico.kmfinal);
    setIdMotorista(servico.idMotorista);
    setIdAtendente(servico.idAtendente);
    setIdVeiculo(servico.idVeiculo);
  };
  const limpar = () => {
    preencher(new Servico());
  };

  const handleSalvar = () => {
    console.log({
      dataSaida,
      dataChegada,
      destino,
      observacao,
      kmInicial,
      kmFinal,
      idMotorista,
      idAtendente,
      idVeiculo,
    });
  };

  return (
    <>
      <Form>
        <InputData
          label="Data Saída"
          value={dataSaida}
          handleChange={(data: Date) => setDataSaida(data)}
        />
        <InputData
          label="Data Chegada"
          value={dataChegada}
          handleChange={(data: Date | null) => setDataChegada(data)}
        />

        <SimpleSelect
          label="Atendentes"
          value={idAtendente}
          onChange={(evt: React.ChangeEvent<HTMLSelectElement>) =>
            setIdAtendente(evt.target.value)
          }
          itens={atendentes.map((atd) => new KeyValue(atd.id, atd.nome))}
        />

        <SimpleSelect
          label="Motoristas"
          value={idMotorista}
          onChange={(evt: React.ChangeEvent<HTMLSelectElement>) =>
            setIdMotorista(evt.target.value)
          }
          itens={motoristas.map(
            (motorista) => new KeyValue(motorista.id, motorista.nome)
          )}
        />

        <SimpleSelect
          label="Veiculos"
          value={idVeiculo}
          onChange={(evt: React.ChangeEvent<HTMLSelectElement>) =>
            setIdVeiculo(evt.target.value)
          }
          itens={veiculos.map((veic) => new KeyValue(veic.id, veic.placa))}
        />

        <Input
          value={destino}
          onChange={(evt) => setDestino(evt.target.value)}
          label="Destino"
        />
        <Input
          value={observacao}
          onChange={(evt) => setObservacao(evt.target.value)}
          label="Observação"
        />
        <Input
          value={kmInicial.toString()}
          onChange={(evt) => setKmInicial(Number(evt.target.value))}
          label="KM Final"
        />
        <Input
          value={kmFinal.toString()}
          onChange={(evt) => setKmFinal(Number(evt.target.value))}
          label="KM Final"
        />

        <ButtonsSalvarLimpar
          handleLimpar={limpar}
          handleSalvar={handleSalvar}
        />
      </Form>
    </>
  );
};
