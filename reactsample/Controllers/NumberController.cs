using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

namespace ReactSample.Controllers
{
    [Route("[controller]")]
    public class NumberController : Controller
    {
        public static string CurrentNumberKey = "current-number";

        [HttpGet]
        public JsonResult Get()
        {
            return Json(HttpContext.Session.GetInt32(CurrentNumberKey));
        }

        [HttpPut("{currentNumber}")]
        public void Put(int currentNumber)
        {
            HttpContext.Session.SetInt32(CurrentNumberKey, currentNumber);
        }
    }
}
