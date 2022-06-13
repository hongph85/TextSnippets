using TextSnippets.Business.Dtos;

namespace TextSnippets.Business.Interfaces
{
    public interface ITextSnippetService
    {
        IEnumerable<TextSnippetDto> GetAll();
        IEnumerable<TextSnippetDto> Search(string keyword);
        bool Create(TextSnippetDto textSnippetDto);
        bool Update(TextSnippetDto textSnippetDto);
        bool Delete(long id);
    }
}