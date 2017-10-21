using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Reflection;

namespace EmbeddedDeviceHostedWebApplicationSample.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        // GET api/values
        [HttpGet]
        public JsonResult Get()
        {
            return Json(new {
                CurrentServerTime = DateTime.Now.ToLongTimeString(),
                RunningAssembly = Assembly.GetExecutingAssembly().FullName
            });
        }
    }
}
