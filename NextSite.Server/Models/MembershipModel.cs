using MongoDB.Bson.Serialization.Attributes;

namespace NextSite.Server.Models
{
    public class MembershipModel : IModel
    {
        [BsonElement("type")]
        public string? Type { get; set; }
        [BsonElement("price")]
        public Int32 Price { get; set; }
        [BsonElement("joiner_fee")]
        public Int32 JoinerFee { get; set; }
        [BsonElement("allow_guest")]
        public bool AllowGuest { get; set; }
    }
}
