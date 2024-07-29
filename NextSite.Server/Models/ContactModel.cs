namespace NextSite.Server.Models
{
    public class ContactModel : IModel
    {
        public string? Name {  get; set; }
        public string? Email {  get; set; }
        public string? Header {  get; set; }
        public string? Message {  get; set; }
    }
}
