using AutoMapper;
using TextSnippets.BackEnd.Controllers;
using TextSnippets.Business.Dtos;
using TextSnippets.Data.Models;

namespace TextSnippets.BackEnd
{
    public class MapperConfig : Profile
    {
        public MapperConfig()
        {
            CreateMap<CUSnippetRequest, TextSnippetDto>();
        }
    }
}
