using Microsoft.AspNetCore.Mvc;
using NextSite.Server.Models;
using NextSite.Server.Services;

namespace NextSite.Server.Controllers
{
    public class AccountController : Controller
    {
        private readonly IService<AccountModel> _service;
        private readonly ILogger<AccountController> _logger;
        private readonly IJwtService _jwtService;
        
        public AccountController(IService<AccountModel> service,
                                IJwtService jwtService,
                                ILogger<AccountController> logger)
        {
            _logger = logger;
            _service = service;
            _jwtService = jwtService;
        }


        [HttpPost]
        [Route("/AddAccount")]
        public async Task<IActionResult> AddAccount([FromBody] AccountModel account)
        {
            if (account == null)
            {
                return BadRequest();
            }
            
            await _service.CreateAsync(account);
            return Ok();
        }

        [HttpPost]
        [Route("/Login")]
        public async Task<IActionResult> Login([FromBody] AccountModel account)
        {
            bool foundAccount = await SearchForAccount(account);
            if (foundAccount)
            {
                var jwt = _jwtService.Generate(account.Id);
                Response.Cookies.Append("jwt", jwt, new CookieOptions
                {
                    HttpOnly = true,
                });
            }
            
            return foundAccount ? Ok(new { message = "success" }) : BadRequest();
        }

        private async Task<bool> SearchForAccount(AccountModel account)
        {
            List<AccountModel> allUsers = await _service.GetAsync();
            if (allUsers == null)
            {
                return false;
            }

            IEnumerable<AccountModel> users = (
                from user in allUsers
                       where (user.Username!.Equals(account.Username) &&
                             user.Password!.Equals(account.Password))
                        select user).ToList();

            if (users.Any() && users.Count() == 1)
            {
                account.Id = users.First().Id;
                return true;
            }
            return false;
        }



    }
}
