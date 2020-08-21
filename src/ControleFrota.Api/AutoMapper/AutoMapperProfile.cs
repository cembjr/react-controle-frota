using AutoMapper;
using Cembjr.ControleFrota.Business.Entities;
using ControleFrota.Api.Models;

namespace ControleFrota.Api.AutoMapper
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<AtendenteDTO, Atendente>().ReverseMap();
            CreateMap<VeiculoDTO, Veiculo>().ReverseMap();
            CreateMap<MotoristaDTO, Motorista>().ReverseMap();
            CreateMap<ServicoDTO, Servico>().ReverseMap();
        }
    }
}