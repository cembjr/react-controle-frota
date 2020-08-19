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
    public class MotoristasController : BaseController
    {
        private readonly IMotoristaRepository motoristaRepository;
        private readonly IMapper mapper;

        public MotoristasController(IMotoristaRepository motoristaRepository, IMapper mapper)
        {
            this.motoristaRepository = motoristaRepository;
            this.mapper = mapper;
        }

        [Route("")]
        [Route("listar")]
        [HttpGet]
        public async Task<IActionResult> Listar() => Ok(mapper.Map<IEnumerable<MotoristaDTO>>(await motoristaRepository.ListarTodos()));

        [Route("obter/{id:guid}")]
        [HttpGet]
        public async Task<IActionResult> Obter(Guid id) => Ok(mapper.Map<MotoristaDTO>(await motoristaRepository.ObterPorId(id)));

        [Route("")]
        [Route("salvar")]
        [HttpPost]
        public async Task<IActionResult> Salvar([FromBody] MotoristaDTO motorista)
        {
            await motoristaRepository.Adicionar(mapper.Map<Motorista>(motorista));
            return Ok();
        }

        [Route("atualizar/{id:guid}")]
        [HttpPut]
        public async Task<IActionResult> Atualizar(Guid id, [FromBody] MotoristaDTO motorista)
        {
            if (id != motorista.Id) return BadRequest("Atualização de Motorista inválidos.");
            
            await motoristaRepository.Atualizar(mapper.Map<Motorista>(motorista));

            return Ok();
        }

        [Route("deletar/{id:guid}")]
        [HttpDelete]
        public async Task<IActionResult> Deletar(Guid id)
        {
            await motoristaRepository.Deletar(id);
            return Ok();
        }

    }
}
