using Microsoft.AspNetCore.Mvc;
using NextSite.Server.Services;

namespace NextSite.Server.Controllers
{
    public class BodyController : Controller
    {
        private readonly IBodyService _bodyService;
        public BodyController(IBodyService bodyService)
        {
            _bodyService = bodyService;
        }

        [HttpGet]
        [Route("/Bootcamps")]
        public async Task<JsonResult> GetBootCamps()
        {
            var bootcamps = await _bodyService.GetByTypeAsync("bootcamp");
            return Json(bootcamps);
        }
        [HttpGet]
        [Route("/Yoga")]
        public async Task<JsonResult> GetYogaCamps()
        {
            var classes = await _bodyService.GetByTypeAsync("class");
            return Json(classes);
        }
    }
}
