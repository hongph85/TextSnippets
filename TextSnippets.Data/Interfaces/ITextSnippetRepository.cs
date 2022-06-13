using TextSnippets.Data.Models;

namespace TextSnippets.Data.Interfaces
{
    public interface ITextSnippetRepository
    {
        IEnumerable<TextSnippet> GetAll();
        IEnumerable<TextSnippet> Find(Func<TextSnippet, bool> exp);
        bool Create(TextSnippet snippet);
        bool Update(TextSnippet snippet);
        bool Delete(long id);
    }
}