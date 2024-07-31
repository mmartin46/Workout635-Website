using Microsoft.AspNetCore.Mvc;
using NextSite.Server.Models;
using NextSite.Server.Services;

namespace NextSite.Server.Controllers
{
    public class AccountController : Controller
    {
        private readonly IService<AccountModel> _service;
        private readonly ILogger<AccountController> _logger;
        
        public AccountController(IService<AccountModel> service, ILogger<AccountController> logger)
        {
            _logger = logger;
            _service = service;
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

    }
}
