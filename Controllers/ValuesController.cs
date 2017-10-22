using System;
using Microsoft.AspNetCore.Mvc;
using System.Reflection;
using EmbeddedDeviceHostedWebApplicationSample.ViewModels;

namespace EmbeddedDeviceHostedWebApplicationSample.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        [HttpPost]
        public JsonResult Post([FromBody]ValuesRequest request)
        {
            return Json(new {
                RequestId = request.RequestId,
                Echo = request.Echo,
                CurrentServerTime = DateTime.Now.ToLongTimeString(),
                RunningAssembly = Assembly.GetExecutingAssembly().FullName
            });
        }
    }
}
