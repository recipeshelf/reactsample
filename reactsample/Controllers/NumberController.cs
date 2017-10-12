using System;
using Microsoft.AspNetCore.Mvc;

namespace ReactSample.Controllers
{
    [Route("[controller]")]
    public class NumberController : Controller
    {
        public static string CurrentNumberKey = "current-number";

        [HttpGet]
        public JsonResult Get()
        {
            byte[] currentNumber = null;
            HttpContext.Session.TryGetValue(CurrentNumberKey, out currentNumber);
            return Json(currentNumber != null ? BitConverter.ToInt32(currentNumber, 0) : (int?)null);
        }

        [HttpPut("{currentNumber}")]
        public void Put(int currentNumber)
        {
            HttpContext.Session.Set(CurrentNumberKey, BitConverter.GetBytes(currentNumber));
        }
    }
}
