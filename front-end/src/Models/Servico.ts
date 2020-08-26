export class Servico {
    public id!: string;
    public saida!: Date;
    public chegada!: Date;
    public idAtendente!: string;
    public idMotorista!: string;
    public idVeiculo!: string;
    public destino!: string;
    public observacao!: string;
    public kmInicial!: number;
    public kmFinal!: number;

    public nomeAtendente!: string;
    public nomeMotorista!: string;
    public placaVeiculo!: string;
}