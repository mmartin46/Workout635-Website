using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.RateLimiting;
using NextSite.Server.Models;
using NextSite.Server.Services;

namespace NextSite.Server.Controllers
{
    public class LocationController : Controller
    {
        private readonly IService<LocationModel>? _service = null;
    
        public LocationController(IService<LocationModel>? service)
        {
            _service = service;
        }

        [EnableRateLimiting("location")]
        [HttpGet]
        [Route("/Locations")]
        public async Task<JsonResult> GetLocations()
        {
            var locations = await _service!.GetAsync();
            return Json(locations);
        }
    }
}
