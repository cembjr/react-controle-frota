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
    public class AtendentesController : BaseController
    {
        private readonly IAtendenteRepository atendenteRepository;
        private readonly IMapper mapper;

        public AtendentesController(IAtendenteRepository atendenteRepository, IMapper mapper)
        {
            this.atendenteRepository = atendenteRepository;
            this.mapper = mapper;
        }

        [Route("")]
        [Route("listar")]
        [HttpGet]
        public async Task<IActionResult> Listar() => Ok(mapper.Map<IEnumerable<AtendenteDTO>>(await atendenteRepository.ListarTodos()));

        [Route("obter/{id:guid}")]
        [HttpGet]
        public async Task<IActionResult> Obter(Guid id) => Ok(mapper.Map<AtendenteDTO>(await atendenteRepository.ObterPorId(id)));

        [Route("")]
        [Route("salvar")]
        [HttpPost]
        public async Task<IActionResult> Salvar([FromBody] AtendenteDTO atendente)
        {
            await atendenteRepository.Adicionar(mapper.Map<Atendente>(atendente));
            return Ok();
        }

        [Route("atualizar/{id:guid}")]
        [HttpPut]
        public async Task<IActionResult> Atualizar(Guid id, [FromBody] AtendenteDTO atendente)
        {
            if (id != atendente.Id) return BadRequest("Atualização de atendente inválidos.");
            
            await atendenteRepository.Atualizar(mapper.Map<Atendente>(atendente));

            return Ok();
        }

        [Route("deletar/{id:guid}")]
        [HttpDelete]
        public async Task<IActionResult> Deletar(Guid id)
        {
            await atendenteRepository.Deletar(id);
            return Ok();
        }

    }
}
