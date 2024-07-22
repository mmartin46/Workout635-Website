using MongoDB.Bson.Serialization.Attributes;

namespace NextSite.Server.Models
{
    public class EmploymentModel
    {
        public Int32 Id { get; set; }
        [BsonElement("position")]
        public string? Position { get; set; }
        [BsonElement("salary")]
        public string? Salary { get; set; }
        [BsonElement("type")]
        public string? Type { get; set; }
        [BsonElement("yoe")]
        public string? YearsOfExperience { get; set; }
        [BsonElement("requirements")]
        public string? Requirements { get; set; }
        [BsonElement("pluses")]
        public string? Pluses { get; set; }
    }
}
