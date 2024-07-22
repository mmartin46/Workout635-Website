using MongoDB.Driver;
using NextSite.Server.Models;

namespace NextSite.Server.Services
{
    public class EmploymentService : IService<EmploymentModel>
    {
        private readonly IMongoCollection<EmploymentModel> _collection;
        public EmploymentService()
        {
            var mongoClient = new MongoClient(Constants.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(Constants.DatabaseName);
            _collection = mongoDatabase.GetCollection<EmploymentModel>("employment");
        }

        public async Task CreateAsync(EmploymentModel employment) =>
            await _collection.InsertOneAsync(employment);

        public async Task<List<EmploymentModel>> GetAsync() =>
            await _collection.Find(_ => true).ToListAsync();


        public async Task<EmploymentModel?> GetAsync(Int32 id) =>
            await _collection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task RemoveAsync(int id) =>
            await _collection.DeleteOneAsync(x => x.Id == id);

        public async Task UpdateAsync(int id, EmploymentModel updatedEmployment) =>
            await _collection.ReplaceOneAsync(x => x.Id == id, updatedEmployment);
    }
}
