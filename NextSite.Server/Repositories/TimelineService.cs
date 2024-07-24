using MongoDB.Driver;
using NextSite.Server.Models;
using NextSite.Server.Services;

namespace NextSite.Server.Repositories
{
    public class TimelineService : IService<TimelineModel>
    {
        private readonly IMongoCollection<TimelineModel> _timelineCollection;
        public TimelineService()
        {
            var mongoClient = new MongoClient(Constants.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(Constants.DatabaseName);
            _timelineCollection = mongoDatabase.GetCollection<TimelineModel>("timeline");
        }

        public async Task CreateAsync(TimelineModel timelineModel) =>
            await _timelineCollection.InsertOneAsync(timelineModel);
        public async Task<List<TimelineModel>> GetAsync() =>
            await _timelineCollection.Find(_ => true).ToListAsync();

        public async Task<TimelineModel?> GetAsync(int id) =>
            await _timelineCollection.Find(x => x.Id == id).FirstOrDefaultAsync();


        public async Task RemoveAsync(int id) =>
            await _timelineCollection.DeleteOneAsync(x => x.Id == id);

        public async Task UpdateAsync(int id, TimelineModel updatedModel) =>
            await _timelineCollection.ReplaceOneAsync(x => x.Id == id, updatedModel);

    }
}
