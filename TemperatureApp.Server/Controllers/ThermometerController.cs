using Microsoft.AspNetCore.Mvc;
using System.ComponentModel;

namespace TemperatureApp.Server.Controllers
{
    [Route("api/temperature")]
    [ApiExplorerSettings(GroupName = "Temperature")]
    public class ThermometerController : ControllerBase
    {
        [HttpGet("GetFarenheight/{Celsius}")]
        public decimal GetFarenheight([FromRoute] decimal Celsius)
        {
            decimal reponse = ((Celsius * 9) / 5) + 32;

            return Math.Round(reponse, 2);
        }

        [HttpGet("GetCelsius/{Farenheight}")]
        public decimal GetCelsius([FromRoute] decimal Farenheight)
        {
            decimal reponse = (Farenheight - 32) * 5 / 9;

            return Math.Round(reponse, 2);
        }
    }
}
