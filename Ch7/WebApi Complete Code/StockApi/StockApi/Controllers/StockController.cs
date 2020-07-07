using StockApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using YahooFinanceApi;

namespace StockApi.Controllers
{
    public class StockController : ApiController
    {
        StockDbEntities _StockDbEntities  = null;

        [Route("~/api/GetDashboardPortfolioData")]
        [HttpGet]
        public List<StockModel> GetDashboardPortfolioData()
        {
            _StockDbEntities = new StockDbEntities();
            var stockmasters = _StockDbEntities.StockMasters.Where(x => x.IsActive == true).ToList();
            List<StockModel> stockModels = new List<StockModel>();
            stockmasters.ForEach(x => {
                var period = "daily";
                var p = Period.Daily;
                if (period.ToLower() == "weekly") p = Period.Weekly;
                else if (period.ToLower() == "monthly") p = Period.Monthly;
                var startDate = DateTime.Now.AddDays(-3);
                var endDate = DateTime.Now;

                var stockData = Yahoo.GetHistoricalAsync(x.StockId, startDate, endDate, p).Result;
                if (stockData.Count > 0)
                {
                    StockModel stockModel = new StockModel();
                    var lastRecord = stockData.LastOrDefault();
                    stockModel.StockId = x.StockId;
                    stockModel.StockName = x.StockName;
                    stockModel.BuyPrice = x.BuyPrice;
                    stockModel.Qty = x.Qty;
                    stockModel.TotalInvested = x.Qty * x.BuyPrice;
                    stockModel.CurrentValue = x.Qty * (int)lastRecord.AdjustedClose;
                    stockModel.TotalGain = stockModel.CurrentValue - stockModel.TotalInvested;
                    stockModels.Add(stockModel);
                }

            });
            return stockModels.OrderBy(c => c.TotalGain).ToList();
        }

        [Route("~/api/GetStock")]
        [HttpGet]
        public List<StockModel> GetStock()
        {
            _StockDbEntities = new StockDbEntities();
            List<StockModel> stockModels = new List<StockModel>();
            var query = _StockDbEntities.StockMasters.ToList();
            query.ForEach(x =>
            {
                StockModel stockModel = new StockModel();
                stockModel.StockId = x.StockId;
                stockModel.StockName = x.StockName;
                stockModels.Add(stockModel);
            });
            return stockModels;
        }

        //[Route("~/api/AddStock")]
        [HttpPost]
        public bool AddStock(StockModel stockModel)
        {
            try
            {
                _StockDbEntities = new StockDbEntities();
                StockMaster stockMaster = new StockMaster();
                stockMaster.StockId = stockModel.StockId;
                stockMaster.StockName = stockModel.StockName;
                stockMaster.BuyPrice = stockModel.BuyPrice;
                stockMaster.Qty = stockModel.Qty;
                stockMaster.IsActive = stockModel.IsActive;
                _StockDbEntities.StockMasters.Add(stockMaster);
                _StockDbEntities.SaveChanges();
            }
            catch (Exception ex)
            {
                return false;
            }
            return true;
        }

        [HttpGet]
        public List<StockMaster> GetActiveStock()
        {
            _StockDbEntities = new StockDbEntities();
            var stockmasters = _StockDbEntities.StockMasters.Where(x => x.IsActive == true).ToList();
            return stockmasters;

        }

        [Route("~/api/GetStockData/{ticker}/{start}/{end}/{period}")]
        [HttpGet]
        public async Task<List<StockModel>> GetStockData(string ticker = "", string start = "",
            string end = "", string period = "")
        {
            var p = Period.Daily;
            if (period.ToLower() == "weekly") p = Period.Weekly;
            else if (period.ToLower() == "monthly") p = Period.Monthly;
            var startDate = DateTime.Parse(start);
            var endDate = DateTime.Parse(end);

            var query = await Yahoo.GetHistoricalAsync(ticker, startDate, endDate, p);

            List<StockModel> models = new List<StockModel>();
            foreach (var r in query)
            {
                models.Add(new StockModel
                {
                    StockName = ticker,
                    Date = r.DateTime.ToString("yyyy-MM-dd"),
                    Open = r.Open,
                    High = r.High,
                    Low = r.Low,
                    Close = r.Close,
                    Volume = r.Volume
                });
            }
            return models;
        }


        [Route("~/api/GetGainerLooserStockData/{ticker}/{period}")]
        [HttpGet]
        public async Task<List<StockModel>> GetGainerLooserStockData(string ticker = "",
        string period = "")
        {
            var p = Period.Daily;
            if (period.ToLower() == "weekly") p = Period.Weekly;
            else if (period.ToLower() == "monthly") p = Period.Monthly;
            var startDate = DateTime.Now.AddMonths(-11);
            var endDate = DateTime.Now;
            var query = await Yahoo.GetHistoricalAsync(ticker, startDate, endDate, p);

            List<StockModel> models = new List<StockModel>();
            foreach (var r in query)
            {
                models.Add(new StockModel
                {
                    StockName = ticker,
                    Date = r.DateTime.ToString("yyyy-MM-dd"),
                    Open = r.Open,
                    High = r.High,
                    Low = r.Low,
                    Close = r.Close,
                    Volume = r.Volume
                });
            }
            return models;
        }
    }
}
