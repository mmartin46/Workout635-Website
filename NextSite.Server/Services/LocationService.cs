using MongoDB.Driver;
using NextSite.Server.Models;

namespace NextSite.Server.Services
{
    public class LocationService : IService<LocationModel>
    {
        private readonly IMongoCollection<LocationModel> _locationCollection;

        public LocationService()
        {
            var mongoClient = new MongoClient(Constants.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(Constants.DatabaseName);
            _locationCollection = mongoDatabase.GetCollection<LocationModel>("locations");
        }

        public async Task CreateAsync(LocationModel location) =>
            await _locationCollection.InsertOneAsync(location);

        public async Task<List<LocationModel>> GetAsync() =>
            await _locationCollection.Find(_ => true).ToListAsync();


        public async Task<LocationModel?> GetAsync(int id) =>
            await _locationCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task RemoveAsync(int id) =>
            await _locationCollection.DeleteOneAsync(x => x.Id == id);


        public async Task UpdateAsync(int id, LocationModel updatedModel) =>
            await _locationCollection.ReplaceOneAsync(x => x.Id == id, updatedModel);

    }
}
