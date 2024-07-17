using Microsoft.AspNetCore.Mvc;
using NextSite.Server.Models;
using NextSite.Server.Services;

namespace NextSite.Server.Controllers
{
    public class ContactController : Controller
    {
        private readonly IService<ContactModel> _contactService;
        public ContactController(IService<ContactModel> contactService)
        {
            _contactService = contactService;
        }

        [HttpPost]
        [Route("/AddContact")]
        public async Task<IActionResult> AddContact([FromForm] ContactModel contact)
        {
            if (contact == null)
            {
                return BadRequest();
            }

            await _contactService.CreateAsync(contact);
            return Ok();
        }
    }
}
