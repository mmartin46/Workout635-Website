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

        public async Task<JsonResult> GetBootCamps()
        {
            var bootcamps = await _bodyService.GetByTypeAsync("bootcamp");
            return Json(bootcamps);
        }

        public async Task<JsonResult> GetClasses()
        {
            var classes = await _bodyService.GetByTypeAsync("classes");
            return Json(classes);
        }
    }
}
