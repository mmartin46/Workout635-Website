using NextSite.Server.Models;

namespace NextSite.Server.Services
{
    public interface ITrainerService
    {
        Task CreateAsync(TrainerModel trainer);
        Task<List<TrainerModel>> GetAsync();
        Task<TrainerModel?> GetAsync(int id);
        Task RemoveAsync(int id);
        Task UpdateAsync(int id, TrainerModel updatedTrainer);
    }
}