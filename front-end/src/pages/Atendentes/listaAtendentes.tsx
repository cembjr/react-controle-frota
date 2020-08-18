import React from "react";
import { Atendente } from "../../Models/Atendente";
import FuncoesUtilitarias from "../../utils/FuncoesUtilitarias";

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
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th>Nome</th>
            <th>Telefone</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="table-hover">
          {atendentes.map((atendente) => (
            <tr key={atendente.id}>
              <td>{atendente.nome}</td>
              <td>{FuncoesUtilitarias.formatarTelefone(atendente.telefone)}</td>
              <td>
                <div className="text-right">
                  <span
                    className="btn btn-warning fa fa-pencil"
                    onClick={() => handleEdit(atendente)}
                  ></span>
                  <span
                    className="btn btn-danger fa fa-trash"
                    onClick={() => handleDelete(atendente.id)}
                  ></span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListaAtendentes;
