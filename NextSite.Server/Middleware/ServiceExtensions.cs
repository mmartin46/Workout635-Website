using NextSite.Server.Models;
using NextSite.Server.Services;

namespace NextSite.Server.Middleware
{
    public static class ServiceExtensions
    {
        
        /*
         * Adds a general singleton service (must extend IService) to your middleware.
         */
       public static IServiceCollection AddGeneralService<T>(this IServiceCollection services, string collection) where T : IModel
        {
            services.AddSingleton<IService<T>>(service => new GeneralService<T>(collection));
            return services;
        }
    }
}
