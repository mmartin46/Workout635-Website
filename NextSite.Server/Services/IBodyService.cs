using NextSite.Server.Models;

namespace NextSite.Server.Services
{
    public interface IBodyService
    {
        Task<List<BodyModel>> GetAsync();
        Task<BodyModel?> GetAsync(int id);
        Task<List<BodyModel>> GetByTypeAsync(string type);
        Task RemoveAsync(int id);
        Task UpdateAsync(int id, BodyModel bodyModel);
    }
}