using MongoDB.Driver;
using NextSite.Server.Models;

namespace NextSite.Server.Services
{
    public class GeneralService<T> : IService<T> where T : IModel
    {
        private readonly IMongoCollection<T> _collection;

        public GeneralService(string collectionName)
        {
            var mongoClient = new MongoClient(Constants.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(Constants.DatabaseName);
            _collection = mongoDatabase.GetCollection<T>(collectionName);
        }

        public async Task CreateAsync(T contact)
        {
            await _collection.InsertOneAsync(contact);
        }
        public async Task<List<T>> GetAsync() =>
            await _collection.Find(_ => true).ToListAsync();

        public async Task<T?> GetAsync(int id) =>
            await _collection.Find(x => x.Id == id).FirstOrDefaultAsync();


        public async Task RemoveAsync(int id) =>
            await _collection.DeleteOneAsync(x => x.Id == id);

        public async Task UpdateAsync(int id, T updatedModel) =>
            await _collection.ReplaceOneAsync(x => x.Id == id, updatedModel);

    }
}
