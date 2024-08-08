namespace NextSite.Server.Models
{
    public class AccountModel : IModel
    {

        public string? Username { get; set; }

        public string? Password { get; set; }
        public string? ConfirmPassword { get; set; }
        public string? Email { get; set; }
        public string? ConfirmEmail { get; set; }
    }
}
