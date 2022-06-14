using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TextSnippets.Data.Interfaces;
using TextSnippets.Data.Models;

namespace TextSnippets.Data.Repositories
{
    public class TextSnippetRepository : ITextSnippetRepository
    {
        List<TextSnippet> _textSnippets = new List<TextSnippet>() {
                new TextSnippet {Id = 1, Title = "Title 1", Text = "Text 1"},
                new TextSnippet {Id = 2, Title = "Title 2", Text = "Text 2"},
                new TextSnippet {Id = 3, Title = "Title 3", Text = "Text 3"},
                new TextSnippet {Id = 4, Title = "Title 4", Text = "Text 4"},
                new TextSnippet {Id = 5, Title = "Title 5", Text = "Text 5"},
            };
        public TextSnippetRepository()
        {
        }

        public IEnumerable<TextSnippet> Find(Func<TextSnippet, bool> exp)
        {
            var result = _textSnippets.Where(exp).ToList();
            return result;
        }

        public IEnumerable<TextSnippet> GetAll()
        {
            return _textSnippets;
        }

        public bool Create(TextSnippet snippet)
        {
            _textSnippets.Add(snippet);
            return true;
        }

        public bool Update(TextSnippet snippet)
        {
            var item = _textSnippets.FirstOrDefault(x => x.Id == snippet.Id);
            if (item == null)
            {
                throw new Exception("Snippet not fould.");
            }

            item.Text = snippet.Text;
            item.Title = snippet.Title;
            return true;
        }

        public bool Delete(long id)
        {
            var item = _textSnippets.FirstOrDefault(x => x.Id == id);
            if (item == null)
            {
                throw new Exception("Snippet not fould.");
            }

            _textSnippets.Remove(item);
            return true;
        }

        public IEnumerable<TextSnippet> GetByPage(int page, int size, out int totalItems)
        {
            totalItems = _textSnippets.Count;
            return _textSnippets.Skip((page - 1) * size).Take(size).ToList();
        }
    }
}
