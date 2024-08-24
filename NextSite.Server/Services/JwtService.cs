using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using NextSite.Server.Models;

namespace NextSite.Server.Services
{
    public class JwtService : IJwtService
    {
        private const int SizeOfByte = 8;
        private readonly IConfiguration _configuration;
        public JwtService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

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
            var symmetricSecurityKey = ExtendLengthIfNecessary(new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Constants.Key)), 256);
            //symmetricSecurityKey.KeyId = id.ToString();
            var credentials = new SigningCredentials(symmetricSecurityKey, SecurityAlgorithms.HmacSha256Signature);
            var header = new JwtHeader(credentials);
            var claims = new List<Claim>();

            try
            {
                claims = new List<Claim>
                {
                    new Claim("user_id", account.Id.ToString()),
                    new Claim(ClaimTypes.NameIdentifier, account.Username!),
                };
            }
            catch (Exception ex)
            {
                var msg = ex.Message;
                msg += "";
            }

            var payload = new JwtPayload(_configuration["Jwt:Issuer"], _configuration["Jwt:Audience"], claims, null, DateTime.Today.AddDays(1)); // 1 Day
            var securityToken = new JwtSecurityToken(header, payload);

            // Serializes the JWT Token to a string and returns it
            return new JwtSecurityTokenHandler().WriteToken(securityToken);
        }

        public JwtSecurityToken Verify(string jwt)
        {
            var tokenHandler = new JwtSecurityTokenHandler();

            var key = Encoding.ASCII.GetBytes(Constants.Key);
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
