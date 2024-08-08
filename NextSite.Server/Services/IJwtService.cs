using System.IdentityModel.Tokens.Jwt;

namespace NextSite.Server.Services
{
    public interface IJwtService
    {
        string Generate(int id);
        JwtSecurityToken Verify(string jwt);
    }
}