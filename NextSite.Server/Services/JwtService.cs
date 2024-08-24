using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using NextSite.Server.Models;

namespace NextSite.Server.Services
{
    public class JwtService : IJwtService
    {
        private string secureKey = "this is a very secure key";
        private const int SizeOfByte = 8;

        private SymmetricSecurityKey ExtendLengthIfNecessary(SymmetricSecurityKey key, int minLengthInBytes)
        {
            if (key != null && key.KeySize < (minLengthInBytes * SizeOfByte))
            {
                var newKey = new byte[minLengthInBytes]; // adds zeroes
                key.Key.CopyTo(newKey, 0);
                return new SymmetricSecurityKey(newKey);
            }
            return key;
        }

        public string Generate(AccountModel account)
        {
            var symmetricSecurityKey = ExtendLengthIfNecessary(new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secureKey)), 256);
            //symmetricSecurityKey.KeyId = id.ToString();
            var credentials = new SigningCredentials(symmetricSecurityKey, SecurityAlgorithms.HmacSha256Signature);
            var header = new JwtHeader(credentials);

            var claims = new List<Claim>
            {
                new Claim("user_id", account.Id.ToString()),
                new Claim(ClaimTypes.NameIdentifier, account.Username!),
                new Claim(ClaimTypes.Email, account.Email!)
            };

            var payload = new JwtPayload(account.Id.ToString(), null, claims, null, DateTime.Today.AddDays(1)); // 1 Day
            var securityToken = new JwtSecurityToken(header, payload);

            // Serializes the JWT Token to a string and returns it
            return new JwtSecurityTokenHandler().WriteToken(securityToken);
        }

        public JwtSecurityToken Verify(string jwt)
        {
            var tokenHandler = new JwtSecurityTokenHandler();

            var key = Encoding.ASCII.GetBytes(secureKey);
            tokenHandler.ValidateToken(jwt, new TokenValidationParameters
            {
                
                IssuerSigningKey = new SymmetricSecurityKey(key),
                ValidateIssuerSigningKey = true,
                ValidateIssuer = false,
                ValidateAudience = false,
            }, out SecurityToken validatedToken);
           

            return (JwtSecurityToken) validatedToken;
        }
    }
}
