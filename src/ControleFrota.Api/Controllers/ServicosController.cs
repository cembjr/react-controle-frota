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
    public class ServicosController : BaseController
    {
        private readonly IServicoRepository servicoRepository;
        private readonly IMapper mapper;

        public ServicosController(IServicoRepository servicoRepository, IMapper mapper)
        {
            this.servicoRepository = servicoRepository;
            this.mapper = mapper;
        }

        [Route("")]
        [Route("listar")]
        [HttpGet]
        public async Task<IActionResult> Listar() => Ok(mapper.Map<IEnumerable<ServicoDTO>>(await servicoRepository.ListarTodos()));

        [Route("obter/{id:guid}")]
        [HttpGet]
        public async Task<IActionResult> Obter(Guid id) => Ok(mapper.Map<AtendenteDTO>(await  servicoRepository.ObterPorId(id)));

        [Route("")]
        [Route("salvar")]
        [HttpPost]
        public async Task<IActionResult> Salvar([FromBody] ServicoDTO servico)
        {
            await servicoRepository.Adicionar(mapper.Map<Servico>(servico));
            return Ok();
        }

        [Route("atualizar/{id:guid}")]
        [HttpPut]
        public async Task<IActionResult> Atualizar(Guid id, [FromBody] ServicoDTO servico)
        {
            if (id != servico.Id) return BadRequest("Atualização de Servico inválidos.");
            
            await servicoRepository.Atualizar(mapper.Map<Servico>(servico));

            return Ok();
        }

        [Route("deletar/{id:guid}")]
        [HttpDelete]
        public async Task<IActionResult> Deletar(Guid id)
        {
            await servicoRepository.Deletar(id);
            return Ok();
        }

    }
}
