using Microsoft.AspNetCore.Mvc;

namespace TextSnippets.BackEnd.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class TextSnippetController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok("Hello Hong!");
        }
    }
}
