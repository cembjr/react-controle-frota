import React, { useState, useEffect, useCallback } from "react";
import { Atendente } from "../../Models/Atendente";
import { Motorista } from "../../Models/Motorista";
import { Veiculo } from "../../Models/Veiculo";
import { ServicoService } from "../../Services/ServicoService";
import { DivFlex } from "../../Components/Div/DivFlex";
import { ButtonsSalvarLimpar } from "../../Components/Button/ButtonsSalvarLimpar";
import { Servico } from "../../Models/Servico";
import { InputData } from "../../Components/InputData/InputData";
import Input from "../../Components/Input/Input";
import { Form } from "../../Components/Form/Form";
import { SimpleSelect } from "../../Components/Select/SimpleSelect";
import { KeyValue } from "../../Models/KeyValue";

interface ServicosFormProps {
  tipo: string;
  servico: Servico | undefined;
  handleForm(servico: Servico): any;
  limpar(): void;
}

export const ServicosForm: React.FC<ServicosFormProps> = (
  props: ServicosFormProps
) => {
  const [atendentes, setAtendentes] = useState<Atendente[]>([]);
  const [motoristas, setMotoristas] = useState<Motorista[]>([]);
  const [veiculos, setVeiculos] = useState<Veiculo[]>([]);

  const [dataSaida, setDataSaida] = useState<Date>(new Date(2020,0,1));
  const [dataChegada, setDataChegada] = useState<Date>(new Date(2020,0,1));
  const [destino, setDestino] = useState("");
  const [observacao, setObservacao] = useState("");
  const [kmInicial, setKmInicial] = useState(0);
  const [kmFinal, setKmFinal] = useState(0);
  const [idMotorista, setIdMotorista] = useState<string | undefined>("");
  const [idAtendente, setIdAtendente] = useState<string | undefined>("");
  const [idVeiculo, setIdVeiculo] = useState<string | undefined>("");

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
    setDataSaida(servico.saida|| new Date());
    setDataChegada(servico.chegada || new Date());
    setDestino(servico.destino);
    setObservacao(servico.observacao);
    setKmInicial(servico.kmInicial);
    setKmFinal(servico.kmFinal);
    setIdMotorista(servico.idMotorista);
    setIdAtendente(servico.idAtendente);
    setIdVeiculo(servico.idVeiculo);
  };

  useEffect(() => {
    preencher(props.servico || new Servico());
  },[props.servico])

  function obterServico(): Servico {
    const servico = new Servico();
    servico.id = props.servico?.id || "";
    servico.saida = dataSaida;
    servico.chegada = dataChegada;
    servico.destino = destino;
    servico.observacao = observacao;
    servico.kmInicial = kmInicial;
    servico.kmFinal = kmFinal;
    servico.idMotorista = idMotorista || "";
    servico.idAtendente = idAtendente  || "";
    servico.idVeiculo = idVeiculo  || "";

    return servico;
  }

  return (
    <>
      <Form width="70%">
        <DivFlex>
          <InputData
            label="Data Saída"
            value={dataSaida}
            handleChange={(data: Date) =>setDataSaida(data)}
          />
          <InputData
            label="Data Chegada"
            value={dataChegada}
            handleChange={(data: Date) => setDataChegada(data)}
          />
        </DivFlex>
        <DivFlex>
          <SimpleSelect
            label="Atendentes"
            value={idAtendente || ''}
            onChange={(evt: React.ChangeEvent<HTMLSelectElement>) =>
              setIdAtendente(evt.target.value)
            }
            itens={atendentes.map((atd) => new KeyValue(atd.id, atd.nome))}
          />

          <SimpleSelect
            label="Motoristas"
            value={idMotorista || ''}
            onChange={(evt: React.ChangeEvent<HTMLSelectElement>) =>
              setIdMotorista(evt.target.value)
            }
            itens={motoristas.map(
              (motorista) => new KeyValue(motorista.id, motorista.nome)
            )}
          />
        </DivFlex>
        <DivFlex>
          <SimpleSelect
            width="50%"
            label="Veiculos"
            value={idVeiculo || ''}
            onChange={(evt: React.ChangeEvent<HTMLSelectElement>) =>
              setIdVeiculo(evt.target.value)
            }
            itens={veiculos.map((veic) => new KeyValue(veic.id, veic.placa))}
          />
        </DivFlex>
        <Input
          width="100%"
          value={destino || ''}
          onChange={(evt) => setDestino(evt.target.value)}
          label="Destino"
        />
        <Input
          value={observacao || ''}
          onChange={(evt) => setObservacao(evt.target.value)}
          label="Observação"
        />
        <DivFlex>
          <Input
            value={kmInicial?.toString() || ''}
            onChange={(evt) => setKmInicial(Number(evt.target.value))}
            label="KM Inicial"
          />
          <Input
            value={kmFinal?.toString() || ''}
            onChange={(evt) => setKmFinal(Number(evt.target.value))}
            label="KM Final"
          />
          <ButtonsSalvarLimpar
            handleLimpar={props.limpar}
            handleSalvar={() => props.handleForm(obterServico())}
          />
        </DivFlex>
      </Form>
    </>
  );
};
