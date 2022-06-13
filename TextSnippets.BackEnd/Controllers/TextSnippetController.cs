using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Web.Resource;
using TextSnippets.Business.Dtos;
using TextSnippets.Business.Interfaces;

namespace TextSnippets.BackEnd.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class TextSnippetController : ControllerBase
    {
        ITextSnippetService service;
        IMapper mapper;

        public TextSnippetController(ITextSnippetService service, IMapper mapper)
        {
            this.service = service;
            this.mapper = mapper;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var results = service.GetAll();
            return Ok(results);
        }

        [HttpGet("search")]
        public IActionResult Search([FromQuery]string q)
        {
            var results = service.Search(q);
            return Ok(results);
        }

        [HttpPost]
        public IActionResult Create(CUSnippetRequest request)
        {
            var textSnippetDto = mapper.Map<TextSnippetDto>(request);
            service.Create(textSnippetDto);
            return Ok();
        }

        [HttpPut]
        public IActionResult Update(CUSnippetRequest request)
        {
            var textSnippetDto = mapper.Map<TextSnippetDto>(request);
            service.Update(textSnippetDto);
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            service.Delete(id);
            return Ok();
        }
    }
}
