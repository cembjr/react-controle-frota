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
            CreateMap<ServicoDTO, Servico>();
            CreateMap<Servico, ServicoDTO>().ConstructUsing(serv =>
                new ServicoDTO()
                {
                    Id = serv.Id,
                    Saida = serv.Saida,
                    Chegada = serv.Chegada,
                    IdAtendente = serv.IdAtendente,
                    NomeAtendente = serv.Atendente.Nome,
                    IdMotorista = serv.IdMotorista,
                    NomeMotorista = serv.Motorista.Nome,
                    IdVeiculo = serv.IdVeiculo,
                    PlacaVeiculo = serv.Veiculo.Placa,
                    Destino = serv.Destino,
                    Observacao = serv.Observacao,
                    KmInicial = serv.KmInicial,
                    KmFinal = serv.KmFinal
                }
            );
        }
    }
}