import React from "react";

import Table from "../../Components/Table/Table";
import EditButton from "../../Components/Button/EditButton";
import DeleteButton from "../../Components/Button/DeleteButton";
import { Veiculo } from "../../Models/Veiculo";

interface VeiculoTableProps {
  veiculos: Veiculo[];
  handleEdit(veiculo: Veiculo): void;
  handleDelete(id: string): void;
}

export const VeiculoTable: React.FC<VeiculoTableProps> = ({
  veiculos,
  handleEdit,
  handleDelete,
}) => {
  return (
    <>
      <Table colunas={["Marca", "Modelo", "Placa"]}>
        {veiculos.map((veiculo) => (
          <tr key={veiculo.id}>
            <td>{veiculo.marca}</td>
            <td>{veiculo.modelo}</td>
            <td>{veiculo.placa}</td>
            <td className="text-right">
              <EditButton action={() => handleEdit(veiculo)} />
              <DeleteButton action={() => handleDelete(veiculo.id)} />
            </td>
          </tr>
        ))}
      </Table>
    </>
  );
};
