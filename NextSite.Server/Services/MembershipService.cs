using MongoDB.Driver;
using NextSite.Server.Models;

namespace NextSite.Server.Services
{
    public class MembershipService : IService<MembershipModel>
    {
        private readonly IMongoCollection<MembershipModel> _membershipCollection;


        public MembershipService()
        {
            var mongoClient = new MongoClient(Constants.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(Constants.DatabaseName);
            _membershipCollection = mongoDatabase.GetCollection<MembershipModel>("memberships");
        }

        public async Task<List<MembershipModel>> GetAsync() =>
            await _membershipCollection.Find(_ => true).ToListAsync();

        public async Task<MembershipModel?> GetAsync(Int32 id) =>
            await _membershipCollection.Find(x => x.Id == id).FirstOrDefaultAsync();
        public async Task CreateAsync(MembershipModel membership) =>
            await _membershipCollection.InsertOneAsync(membership);

        public async Task UpdateAsync(Int32 id, MembershipModel updatedMembership) =>
            await _membershipCollection.ReplaceOneAsync(x => x.Id == id, updatedMembership);
        public async Task RemoveAsync(Int32 id) =>
            await _membershipCollection.DeleteOneAsync(x => x.Id == id);
    }
}
