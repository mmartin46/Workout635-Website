using Microsoft.AspNetCore.Mvc;
using NextSite.Server.Models;
using NextSite.Server.Services;

namespace NextSite.Server.Controllers
{
    public class EmployeeController : Controller
    {
        private readonly IService<EmployeeModel> _service = null;
        public EmployeeController(IService<EmployeeModel> service) 
        {
            _service = service;
        }

        [HttpGet]
        [Route("/Employee")]
        public async Task<JsonResult> GetEmployees(string position)
        {
            List<EmployeeModel> employees = await _service.GetAsync();
            if (position != null)
            {
                employees = employees.Where(x => x.Position!.ToLower().Contains(position)).ToList();
                return Json(employees);
            }
            return Json(employees);
        }
    }
}
