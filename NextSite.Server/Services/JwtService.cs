using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.IdentityModel.Tokens;

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

        public string Generate(int id)
        {
            var symmetricSecurityKey = ExtendLengthIfNecessary(new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secureKey)), 256);
            var credentials = new SigningCredentials(symmetricSecurityKey, SecurityAlgorithms.HmacSha256Signature);
            var header = new JwtHeader(credentials);

            var payload = new JwtPayload(id.ToString(), null, null, null, DateTime.Today.AddDays(1)); // 1 Day
            var securityToken = new JwtSecurityToken(header, payload);

            return new JwtSecurityTokenHandler().WriteToken(securityToken);
        }
    }
}
