using MongoDB.Bson.Serialization.Attributes;

namespace NextSite.Server.Models
{
    public class BodyModel
    {
        public Int32 Id { get; set; }
        [BsonElement("type")]
        public string Type { get; set; } = "Unknown";
        [BsonElement("name")]
        public string Name { get; set; } = "Unknown";
        [BsonElement("duration")]
        public string Duration { get; set; } = "Unknown";
        [BsonElement("intensity")]
        public string? Intensity { get; set; }
        [BsonElement("description")]
        public string? Description { get; set; }

        [BsonElement("img")]
        public string? Image {  get; set; }
    }
}
