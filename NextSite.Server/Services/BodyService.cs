using MongoDB.Driver;
using NextSite.Server.Models;

namespace NextSite.Server.Services
{
    public class BodyService : IBodyService
    {
        private readonly IMongoCollection<BodyModel> _mongoCollection;
        public BodyService()
        {
            var mongoClient = new MongoClient(Constants.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(Constants.DatabaseName);
            _mongoCollection = mongoDatabase.GetCollection<BodyModel>("services");
        }

        public async Task<List<BodyModel>> GetAsync() =>
            await _mongoCollection.Find(_ => true).ToListAsync();

        public async Task<List<BodyModel>> GetByTypeAsync(string type) =>
            await _mongoCollection.Find(x => x.Type == type).ToListAsync();

        public async Task<BodyModel?> GetAsync(Int32 id) =>
            await _mongoCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task UpdateAsync(Int32 id, BodyModel bodyModel) =>
            await _mongoCollection.ReplaceOneAsync(x => x.Id == id, bodyModel);

        public async Task RemoveAsync(Int32 id) =>
            await _mongoCollection.DeleteOneAsync(x => x.Id == id);
    }
}
