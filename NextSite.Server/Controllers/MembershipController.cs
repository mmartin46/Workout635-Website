using Microsoft.AspNetCore.Mvc;
using NextSite.Server.Models;
using NextSite.Server.Services;

namespace NextSite.Server.Controllers
{
    public class MembershipController : Controller
    {
        private readonly IService<MembershipModel>? _membershipService = null;
        public MembershipController(IService<MembershipModel> membershipService) 
        {
            _membershipService = membershipService;
        }

        [HttpGet]
        [Route("/Memberships")]
        public async Task<JsonResult> GetMemberships()
        {
            var memberships = await _membershipService.GetAsync();
            return Json(memberships);
        }


    }
}
