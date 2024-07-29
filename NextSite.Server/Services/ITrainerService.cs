using NextSite.Server.Models;

namespace NextSite.Server.Services
{
    public interface IService<T> where T : IModel
    {
        Task CreateAsync(T trainer);
        Task<List<T>> GetAsync();
        Task<T?> GetAsync(Int32 id);
        Task RemoveAsync(Int32 id);
        Task UpdateAsync(Int32 id, T updatedModel);
    }
}