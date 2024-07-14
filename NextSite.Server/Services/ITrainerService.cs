using NextSite.Server.Models;

namespace NextSite.Server.Services
{
    public interface ITrainerService
    {
        Task CreateAsync(TrainerModel trainer);
        Task<List<TrainerModel>> GetAsync();
        Task<TrainerModel?> GetAsync(Int32 id);
        Task RemoveAsync(Int32 id);
        Task UpdateAsync(Int32 id, TrainerModel updatedTrainer);
    }
}