using Microsoft.AspNetCore.Mvc;
using NextSite.Server.Services;

namespace NextSite.Server.Controllers
{
    public class TrainerController : Controller
    {
        private readonly IService<TrainerService>? _trainerService = null;

        public TrainerController(IService<TrainerService> trainerService)
        {
            _trainerService = trainerService;
        }

        [HttpGet]
        [Route("/Trainers")]
        public async Task<JsonResult> GetTrainers()
        {
            var trainers = await _trainerService.GetAsync();
            return Json(trainers);
        }
    }
}
