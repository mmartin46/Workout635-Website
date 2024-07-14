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
            var mongoClient = new MongoClient(Constants.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(Constants.DatabaseName);
            _trainerCollection = mongoDatabase.GetCollection<TrainerModel>(Constants.CollectionName);
        }

        public async Task<List<TrainerModel>> GetAsync() =>
            await _trainerCollection.Find(_ => true).ToListAsync();

        public async Task<TrainerModel?> GetAsync(Int32 id) =>
            await _trainerCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(TrainerModel trainer) =>
            await _trainerCollection.InsertOneAsync(trainer);

        public async Task UpdateAsync(Int32 id, TrainerModel updatedTrainer) =>
            await _trainerCollection.ReplaceOneAsync(x => x.Id == id, updatedTrainer);

        public async Task RemoveAsync(Int32 id) =>
            await _trainerCollection.DeleteOneAsync(x => x.Id == id);
    }
}
