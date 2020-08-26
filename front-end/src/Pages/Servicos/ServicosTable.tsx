import React from "react";
import { Servico } from "../../Models/Servico";
import DeleteButton from "../../Components/Button/DeleteButton";
import Table from "../../Components/Table/Table";
import EditButton from "../../Components/Button/EditButton";
import FuncoesUtilitarias from "../../Utils/FuncoesUtilitarias";
interface ServicoTableProps {
  servicos: Servico[];
  handleEdit(servico: Servico): void;
  handleDelete(id: string): void;
}

export const ServicosTable: React.FC<ServicoTableProps> = ({
  servicos,
  handleEdit,
  handleDelete,
}) => {
  return (
    <>
      <Table colunas={["Data", "Motorista", "Veiculo", "Destino"]}>
        {servicos.map((servico) => (
          <tr key={servico.id}>
            <td>{FuncoesUtilitarias.formatarDataParaTela(servico.saida)}</td>
            <td>{servico.nomeMotorista}</td>
            <td>{servico.placaVeiculo}</td>
            <td>{servico.destino}</td>
            <td className="text-right">
              <EditButton action={() => handleEdit(servico)} />
              <DeleteButton action={() => handleDelete(servico.id)} />
            </td>
          </tr>
        ))}
      </Table>
    </>
  );
};
