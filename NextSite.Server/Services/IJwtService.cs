using NextSite.Server.Models;
using System.IdentityModel.Tokens.Jwt;

namespace NextSite.Server.Services
{
    public interface IJwtService
    {
        string Generate(AccountModel account);
        JwtSecurityToken Verify(string jwt);
    }
}