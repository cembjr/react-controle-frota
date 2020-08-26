import api from "./api";
import { AxiosResponse } from "axios";

export abstract class BaseService<T> {
  constructor(private url: string) {}

  public api = api;

  public listar(): Promise<AxiosResponse<T[]>> {
    return api.get<T[]>(this.url);
  }

  public salvar(ent: T): Promise<AxiosResponse<void>> {
    return api.post(`${this.url}/salvar`, ent);
  }

  public atualizar(ent: T, id: String): Promise<AxiosResponse<void>> {
    return api.put(`${this.url}/atualizar/${id}`, ent);
  }

  public deletar(id: string): Promise<AxiosResponse<void>> {
    return api.delete(`${this.url}/deletar/${id}`);
  }
}
