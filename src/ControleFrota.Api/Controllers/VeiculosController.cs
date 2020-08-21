using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Cembjr.ControleFrota.Business.Entities;
using Cembjr.ControleFrota.Business.Interfaces;
using ControleFrota.Api.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ControleFrota.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VeiculosController : BaseController
    {
        private readonly IVeiculoRepository veiculoRepository;
        private readonly IMapper mapper;

        public VeiculosController(IVeiculoRepository veiculoRepository, IMapper mapper)
        {
            this.veiculoRepository = veiculoRepository;
            this.mapper = mapper;
        }

        [Route("")]
        [Route("listar")]
        [HttpGet]
        public async Task<IActionResult> Listar() => Ok(mapper.Map<IEnumerable<VeiculoDTO>>(await veiculoRepository.ListarTodos()));

        [Route("obter/{id:guid}")]
        [HttpGet]
        public async Task<IActionResult> Obter(Guid id) => Ok(mapper.Map<VeiculoDTO>(await veiculoRepository.ObterPorId(id)));

        [Route("salvar")]
        [HttpPost]
        public async Task<IActionResult> Salvar([FromBody] VeiculoDTO veiculo)
        {
            await veiculoRepository.Adicionar(mapper.Map<Veiculo>(veiculo));
            return Ok();
        }

        [Route("atualizar/{id:guid}")]
        [HttpPut]
        public async Task<IActionResult> Atualizar(Guid id, [FromBody] VeiculoDTO veiculo)
        {
            if (id != veiculo.Id) return BadRequest("Atualização de Veiculo inválidos.");
            
            await veiculoRepository.Atualizar(mapper.Map<Veiculo>(veiculo));

            return Ok();
        }

        [Route("deletar/{id:guid}")]
        [HttpDelete]
        public async Task<IActionResult> Deletar(Guid id)
        {
            await veiculoRepository.Deletar(id);
            return Ok();
        }

    }
}
