using NextSite.Server.Models;
using NextSite.Server.Services;
using Microsoft.AspNetCore.Mvc;
namespace NextSite.Server.Controllers
{
    public class EmploymentController : Controller
    {
        private readonly IService<EmploymentModel> _service;
        public EmploymentController(IService<EmploymentModel> service)
        {
            _service = service;
        }

        [HttpGet]
        [Route("/Opportunities")]
        public async Task<JsonResult> GetOpportunities()
        {
            var oppurtunities = await _service.GetAsync();
            return Json(oppurtunities);
        }
    }
}
