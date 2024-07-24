using Microsoft.AspNetCore.Mvc;
using NextSite.Server.Models;
using NextSite.Server.Services;

namespace NextSite.Server.Controllers
{
    public class TimelineController : Controller
    {
        private readonly IService<TimelineModel>? _timelineService = null;
        public TimelineController(IService<TimelineModel> timelineService)
        {
            _timelineService = timelineService;
        }

        [HttpGet]
        [Route("/Timeline")]
        public async Task<JsonResult> GetTimeline()
        {
            var timeline = await _timelineService!.GetAsync();
            return Json(timeline);
        }
    }
}
