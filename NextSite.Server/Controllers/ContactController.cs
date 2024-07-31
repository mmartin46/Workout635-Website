using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.RateLimiting;
using NextSite.Server.Models;
using NextSite.Server.Services;
using Portfolio.Services;

namespace NextSite.Server.Controllers
{
    [EnableRateLimiting("contact")]
    public class ContactController : Controller
    {
        private readonly IService<ContactModel> _contactService;
        private readonly IEmailService _emailService;
        public ContactController(IService<ContactModel> contactService, IEmailService emailService)
        {
            _contactService = contactService;
            _emailService = emailService;
        }

        [EnableRateLimiting("contact")]
        [HttpPost]
        [Route("/AddContact")]
        public async Task<IActionResult> AddContact([FromBody] ContactModel contact)
        {
            if (contact == null)
            {
                return BadRequest();
            }

            if (!ValidPropertyLength(contact))
            {
                return BadRequest();
            }

            await _contactService.CreateAsync(contact);

            bool didSend = await _emailService.SendEmailAsync(Constants.MY_EMAIL, contact.Name + "(" + contact.Email + ")" + " - " + contact.Header, contact.Message);
            return (!didSend) ? BadRequest("Problem sending email") : Ok();
        }

        private bool ValidPropertyLength(ContactModel contact)
        {
            if (contact.Name == null)
            {
                return false;
            }
            else if (contact.Message == null)
            {
                return false;
            }


            if (contact.Name.Length <= 2 || contact.Message.Length <= 2)
            {
                return false;
            }
            return true;
        }
    }
}
