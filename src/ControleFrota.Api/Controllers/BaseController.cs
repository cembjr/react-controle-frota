using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ControleFrota.Api.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ControleFrota.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BaseController : Controller
    {
        public new IActionResult Response(ResponseResult result) 
        {
            return result.IsSucesso ? (IActionResult) BadRequest(result.Data) : Ok(result.Data);
        }
    }
}
