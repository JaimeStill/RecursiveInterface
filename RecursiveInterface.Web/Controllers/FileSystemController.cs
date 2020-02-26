using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RecursiveInterface.Core.FileSystem;

namespace RecursiveInterface.Web.Controllers
{
    [Route("api/[controller]")]
    public class FileSystemController : Controller
    {
        [HttpGet("[action]")]
        public Folder GetFolder([FromQuery]string path) => Folder.FromPath(path);
    }
}