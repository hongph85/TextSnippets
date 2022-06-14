using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TextSnippets.Business.Dtos;
using TextSnippets.Business.Interfaces;
using TextSnippets.Data.Interfaces;
using TextSnippets.Data.Models;
using TextSnippets.Data.Repositories;

namespace TextSnippets.Business
{
    public class TextSnippetService : ITextSnippetService
    {
        ITextSnippetRepository repository;
        IMapper mapper;

        public TextSnippetService(ITextSnippetRepository repository, IMapper mapper)
        {
            this.repository = repository;
            this.mapper = mapper;
        }

        public IEnumerable<TextSnippetDto> GetAll()
        {
            var result = mapper.Map<IEnumerable<TextSnippetDto>>(repository.GetAll());
            return result;
        }

        public IEnumerable<TextSnippetDto> Search(string keyword)
        {
            var result = mapper.Map<IEnumerable<TextSnippetDto>>(repository.Find(x => x.Text.Contains(keyword)));
            return result;
        }

        public bool Create(TextSnippetDto textSnippetDto)
        {
            var newItem = mapper.Map<TextSnippet>(textSnippetDto);
            repository.Create(newItem);
            return true;
        }

        public bool Update(TextSnippetDto textSnippetDto)
        {
            var newItem = mapper.Map<TextSnippet>(textSnippetDto);
            repository.Update(newItem);
            return true;
        }

        public bool Delete(long id)
        {
            repository.Delete(id);
            return true;
        }

        public PaginationDto<TextSnippetDto> GetByPage(int page, int itemsPerPage)
        {
            var result = mapper.Map<IEnumerable<TextSnippetDto>>(repository.GetByPage(page, itemsPerPage, out int totalItems));

            return new PaginationDto<TextSnippetDto>()
            {
                TotalItems = totalItems,
                Items = result,
                Page = page,
                Size = itemsPerPage
            };
        }
    }
}
