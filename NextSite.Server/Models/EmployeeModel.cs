using MongoDB.Bson.Serialization.Attributes;

namespace NextSite.Server.Models
{
    public class EmployeeModel : TrainerModel
    {
        [BsonElement("position")]
        public string? Position { get; set; }
    }
}
