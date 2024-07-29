using MongoDB.Driver;
using NextSite.Server.Models;
using System.Collections;

namespace NextSite.Server.Services
{
    public class BodyService<T> : GeneralService<T>, IBodyService<T> where T : BodyModel
    {
        public BodyService(string collection) : base(collection) { }

        public async Task<List<T>> GetByTypeAsync(string type) =>
            await _collection.Find(x => x.Type == type).ToListAsync();

    }
}
