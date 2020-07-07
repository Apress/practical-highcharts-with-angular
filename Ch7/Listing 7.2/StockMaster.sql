CREATE TABLE [dbo].[StockMaster] (
    [Id]        INT           IDENTITY (1, 1) NOT NULL,
    [StockId]   NVARCHAR (50) NULL,
    [StockName] NVARCHAR (50) NULL,
    [BuyPrice]  INT           NULL,
    [Qty]       INT           NULL,
    [IsActive]  BIT           NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);