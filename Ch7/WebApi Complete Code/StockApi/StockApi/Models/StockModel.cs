using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace StockApi.Models
{
    public class StockModel
    {
        public string StockId { get; set; }
        public string StockName { get; set; }
        public string Date { get; set; }
        public decimal Open { get; set; }
        public decimal High { get; set; }
        public decimal Low { get; set; }
        public decimal Close { get; set; }
        public decimal Volume { get; set; }
        public int? BuyPrice { get; set; }
        public int? Qty { get; set; }
        public bool IsActive { get; set; }
        public int? TotalInvested { get; set; }
        public int? CurrentValue { get; set; }
        public int? TotalGain { get; set; }
    }
}