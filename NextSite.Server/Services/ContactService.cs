using MongoDB.Driver;
using NextSite.Server.Models;

namespace NextSite.Server.Services
{
    public class ContactService : IService<ContactModel>
    {
        private readonly IMongoCollection<ContactModel> _contactCollection;

        public ContactService()
        {
            var mongoClient = new MongoClient(Constants.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(Constants.DatabaseName);
            _contactCollection = mongoDatabase.GetCollection<ContactModel>("contacts");
        }

        public async Task CreateAsync(ContactModel contact) =>
            await _contactCollection.InsertOneAsync(contact);

        public async Task<List<ContactModel>> GetAsync() =>
            await _contactCollection.Find(_ => true).ToListAsync();

        public async Task<ContactModel?> GetAsync(int id) =>
            await _contactCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task RemoveAsync(int id) =>
            await _contactCollection.DeleteOneAsync(x => x.Id == id);

        public async Task UpdateAsync(int id, ContactModel updatedModel) =>
            await _contactCollection.ReplaceOneAsync(x => x.Id == id, updatedModel);

    }
}
