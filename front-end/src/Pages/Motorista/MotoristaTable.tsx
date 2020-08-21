import React from "react";

import FuncoesUtilitarias from "../../Utils/FuncoesUtilitarias";
import Table from "../../Components/Table/Table";
import EditButton from "../../Components/Button/EditButton";
import DeleteButton from "../../Components/Button/DeleteButton";
import { Motorista } from "../../Models/Motorista";

interface MotoristaTableProps {
  motoristas: Motorista[];
  handleEdit(Motorista: Motorista): void;
  handleDelete(id: string): void;
}

export const MotoristaTable: React.FC<MotoristaTableProps> = ({
  motoristas,
  handleEdit,
  handleDelete,
}) => {
  return (
    <>
      <Table colunas={["Nome", "Telefone", "CNH"]}>
        {motoristas.map((motorista) => (
          <tr key={motorista.id}>
            <td>{motorista.nome}</td>
            <td>{FuncoesUtilitarias.formatarTelefone(motorista.telefone)}</td>
            <td>{motorista.cnh}</td>
            <td className="text-right">
              <EditButton action={() => handleEdit(motorista)} />
              <DeleteButton action={() => handleDelete(motorista.id)} />
            </td>
          </tr>
        ))}
      </Table>
    </>
  );
};