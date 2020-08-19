using System;

namespace ControleFrota.Api.Models
{
    public class MotoristaDTO
    {
        public Guid Id { get; set; }
         public string Nome { get; set; }
        public string Telefone { get; set; }
        public string Cnh { get; set; }
    }
}