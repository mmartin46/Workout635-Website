using MongoDB.Bson.Serialization.Attributes;

namespace NextSite.Server.Models
{
    public class TrainerModel
    {
        public Int32 Id { get; set; }
        
        [BsonElement("firstName")]
        public string FirstName { get; set; }

        [BsonElement("lastName")]
        public string LastName { get; set; }

        [BsonElement("phoneNumber")]
        public string PhoneNumber { get; set; }

        [BsonElement("email")]
        public string Email { get; set; }

        [BsonElement("headshot")]
        public string Headshot { get; set; }
    }
}
