using Microsoft.AspNetCore.Mvc;
using BuggyApp.Models;
using System.Collections.Generic;
using System.Linq;

namespace BuggyApp.Controllers
{
    [ApiController]
    [Route("api/invoice")]
    public class InvoiceController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetInvoice()
        {
            var items = new List<InvoiceItem>
            {
                new InvoiceItem { Name = "API Calls", Price = 85.00 },
                new InvoiceItem { Name = "Storage", Price = 11.38 },
                new InvoiceItem { Name = "Compute Time", Price = 7.50 }
            };

            var invoice = new
            {
                customerId = "CUST001",
                items = items,
                total = items.Sum(i => i.Price)
            };

            return Ok(invoice);
        }
    }
}

