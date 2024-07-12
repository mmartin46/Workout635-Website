using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using NextSite.Server.Models;

namespace NextSite.Server.Repositories
{
    public class TrainerRepository
    {
        private readonly IMongoCollection<TrainerModel> _trainerCollection;
        public TrainerRepository()
        {
            var mongoClient = new MongoClient("mongodb+srv://mitchellbmartin00:Isaiah4031");
        }
    }
}
