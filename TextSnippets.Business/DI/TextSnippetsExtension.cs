using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TextSnippets.Business.Interfaces;
using TextSnippets.Data.DI;

namespace TextSnippets.Business.DI
{
    public static class TextSnippetsExtension
    {
        public static IServiceCollection AddTextSnippetBusiness(this IServiceCollection services)
        {
            services.AddTextSnippetDataAccess();
            services.AddScoped<ITextSnippetService, TextSnippetService>();
            return services;
        }
    }
}
