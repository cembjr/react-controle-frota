import { Servico } from "../Models/Servico";
import { BaseService } from "./BaseService";
import { Atendente } from "../Models/Atendente";
import { Veiculo } from "../Models/Veiculo";
import { Motorista } from "../Models/Motorista";
import { AxiosResponse } from "axios";

export class ServicoService extends BaseService<Servico> {

    constructor() {
        super('api/servicos');        
    }

    public obterAtendentes(): Promise<AxiosResponse<Atendente[]>> {
        return this.api.get<Atendente[]>('api/atendentes');
    }

    public obterMotoristas(): Promise<AxiosResponse<Motorista[]>> {
        return this.api.get<Motorista[]>('api/motoristas');
    }

    public obterVeiculo(): Promise<AxiosResponse<Veiculo[]>> {
        return this.api.get<Veiculo[]>('api/veiculos');
    }
}