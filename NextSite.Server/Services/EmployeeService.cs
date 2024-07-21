using MongoDB.Driver;
using NextSite.Server.Models;

namespace NextSite.Server.Services
{
    public class EmployeeService : IService<EmployeeModel>
    {
        private readonly IMongoCollection<EmployeeModel> _employeeCollection;
        public EmployeeService()
        {
            var mongoClient = new MongoClient(Constants.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(Constants.DatabaseName);
            _employeeCollection = mongoDatabase.GetCollection<EmployeeModel>("employees");
        }

        public async Task<List<EmployeeModel>> GetAsync() =>
            await _employeeCollection.Find(_ => true).ToListAsync();

        public async Task<EmployeeModel?> GetAsync(Int32 id) =>
            await _employeeCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(EmployeeModel employee) =>
            await _employeeCollection.InsertOneAsync(employee);

        public async Task UpdateAsync(Int32 id, EmployeeModel updatedEmployee) =>
            await _employeeCollection.ReplaceOneAsync(x => x.Id == id, updatedEmployee);

        public async Task RemoveAsync(Int32 id) =>
            await _employeeCollection.DeleteOneAsync(x => x.Id == id);

    }
}
