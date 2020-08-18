using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ControleFrota.Api.Models
{
    public class ResponseResult
    {
        public bool IsSucesso { get; set; }
        
        public object Data { get; set; }

        public string Mensagem { get; set; }
    }
}
