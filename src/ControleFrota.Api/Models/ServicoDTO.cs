using System;

namespace ControleFrota.Api.Models
{
    public class ServicoDTO
    {
        public Guid Id { get; set; }
        public DateTime Saida { get; set; }
        public DateTime? Chegada { get; set; }
        public Guid IdAtendente { get; set; }
        public string NomeAtendente { get; set; }
        public Guid IdMotorista { get; set; }
        public string NomeMotorista { get; set; }  
        public Guid IdVeiculo { get; set; }
        public string PlacaVeiculo { get; set; }
        public string Destino { get; set; }
        public string Observacao { get; set; }
        public int KmInicial { get; set; }
        public int? KmFinal { get; set; }
    }
}