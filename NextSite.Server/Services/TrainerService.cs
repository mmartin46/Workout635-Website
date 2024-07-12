// John 3:5
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using NextSite.Server.Models;

namespace NextSite.Server.Services
{
    public class TrainerService : ITrainerService
    {
        private readonly IMongoCollection<TrainerModel> _trainerCollection;
        public TrainerService()
        {
            var mongoClient = new MongoClient("mongodb+srv://mitchellbmartin00:Isaiah4031");
            var mongoDatabase = mongoClient.GetDatabase("weight_website");
            _trainerCollection = mongoDatabase.GetCollection<TrainerModel>("personal_trainers");
        }

        public async Task<List<TrainerModel>> GetAsync() =>
            await _trainerCollection.Find(_ => true).ToListAsync();

        public async Task<TrainerModel?> GetAsync(int id) =>
            await _trainerCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(TrainerModel trainer) =>
            await _trainerCollection.InsertOneAsync(trainer);

        public async Task UpdateAsync(int id, TrainerModel updatedTrainer) =>
            await _trainerCollection.ReplaceOneAsync(x => x.Id == id, updatedTrainer);

        public async Task RemoveAsync(int id) =>
            await _trainerCollection.DeleteOneAsync(x => x.Id == id);
    }
}
