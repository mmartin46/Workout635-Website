using NextSite.Server.Models;

namespace NextSite.Server.Services
{
    public interface IBodyService<T> : IService<T> where T : BodyModel
    {
        Task<List<T>> GetByTypeAsync(string type);
    }
}