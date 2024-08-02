namespace NextSite.Server.Services
{
    public interface IJwtService
    {
        string Generate(int id);
    }
}