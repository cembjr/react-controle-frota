using System;

namespace ControleFrota.Api.Models
{
    public class VeiculoDTO
    {
        public Guid Id { get; set; }
        public string Marca { get; set; }
        public string Modelo { get; set; }
        public string Placa { get; set; }
    }
}