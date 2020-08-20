import React from "react";
import { Atendente } from "../../Models/Atendente";
import FuncoesUtilitarias from "../../Utils/FuncoesUtilitarias";
import Table from "../../Components/Table/Table";
import EditButton from "../../Components/Button/EditButton";
import DeleteButton from "../../Components/Button/DeleteButton";

interface ListaAtendentesProps {
  atendentes: Atendente[];
  handleEdit(atendente: Atendente): void;
  handleDelete(id: string): void;
}

const ListaAtendentes: React.FC<ListaAtendentesProps> = ({
  atendentes,
  handleEdit,
  handleDelete,
}) => {
  return (
    <>
      <Table colunas={["Nome", "Telefone"]}>
        {atendentes.map((atendente) => (
          <tr key={atendente.id}>
            <td>{atendente.nome}</td>
            <td>{FuncoesUtilitarias.formatarTelefone(atendente.telefone)}</td>
            <td className="text-right">
              <EditButton action={() => handleEdit(atendente)} />
              <DeleteButton action={() => handleDelete(atendente.id)} />
            </td>
          </tr>
        ))}
      </Table>
    </>
  );
};

export default ListaAtendentes;
