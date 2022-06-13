using AutoMapper;
using TextSnippets.Business.Dtos;
using TextSnippets.Data.Models;

namespace TextSnippets.Business
{
    public class MapperConfig : Profile
    {
        public MapperConfig()
        {
            CreateMap<TextSnippet, TextSnippetDto>();
            CreateMap<TextSnippetDto, TextSnippet>();
        }
    }
}
