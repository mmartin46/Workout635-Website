﻿using MongoDB.Bson.Serialization.Attributes;

namespace NextSite.Server.Models
{
    public class TimelineModel : IModel
    {
        [BsonElement("year")]
        public Int32 Year { get; set; }
        [BsonElement("topic")]
        public string? Topic { get; set; }
    }
}
