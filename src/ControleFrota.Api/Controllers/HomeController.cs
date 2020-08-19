using System;
using Microsoft.AspNetCore.Mvc;

namespace ControleFrota.Api.Controllers
{
    [Route("")]
    [ApiController]
    public class HomeController : BaseController
    {
       [HttpGet]
       [Route("/")]
       public IActionResult Obter() => Ok("Bem vindo ao sistema de gerenciamento de frotas");

    }
}
