using Microsoft.AspNetCore.Mvc;

namespace NextSite.Server.Controllers
{
    public class TrainerController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
