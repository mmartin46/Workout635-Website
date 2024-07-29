using MongoDB.Bson.Serialization.Attributes;

namespace NextSite.Server.Models
{
    public class LocationModel : IModel
    {
        [BsonElement("location")]
        public Double[]? Location { get; set; }
        [BsonElement("name")]
        public string? Name { get; set; }
    }
}
