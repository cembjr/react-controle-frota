using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Cembjr.ControleFrota.Business.Entities;
using Cembjr.ControleFrota.Business.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ControleFrota.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AtendenteController : BaseController
    {
        private readonly IAtendenteRepository atendenteRepository;

        public AtendenteController(IAtendenteRepository atendenteRepository)
        {
            this.atendenteRepository = atendenteRepository;
        }

        [Route("")]
        [Route("listar")]
        [HttpGet]
        public async Task<IActionResult> Listar() => Ok(await atendenteRepository.ListarTodos());

        [Route("obter/{id:guid}")]
        [HttpGet]
        public async Task<IActionResult> Obter(Guid id) => Ok(await atendenteRepository.ObterPorId(id));

        [Route("salvar")]
        [Route("")]
        [HttpPost]
        public async Task<IActionResult> Salvar([FromBody] Atendente atendente)
        {
            await atendenteRepository.Adicionar(atendente);
            return Ok();
        }

        [Route("{id:guid}")]
        [Route("atualizar/{id:guid}")]
        [HttpPut]
        public async Task<IActionResult> Atualizar(Guid id, [FromBody] Atendente atendente)
        {
            if (id != atendente.Id) return BadRequest("Atualização de atendente inválidos.");
            
            await atendenteRepository.Atualizar(atendente);

            return Ok();
        }

        [Route("{id:guid}")]
        [Route("deletar/{id:guid}")]
        [HttpDelete]
        public async Task<IActionResult> Deletar(Guid id)
        {
            await atendenteRepository.Deletar(id);
            return Ok();
        }

    }
}
