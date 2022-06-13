using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TextSnippets.Data.Interfaces;
using TextSnippets.Data.Repositories;

namespace TextSnippets.Data.DI
{
    public static class TextSnippetsDataExtension
    {
        public static IServiceCollection AddTextSnippetDataAccess(this IServiceCollection services)
        {
            services.AddScoped<ITextSnippetRepository, TextSnippetRepository>();
            return services;
        }
    }
}
