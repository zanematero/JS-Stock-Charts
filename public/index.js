async function main() {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

   fetch("https://api.twelvedata.com/time_series?symbol=GME,EUR/USD,ETH/BTC:Huobi,TRP:TSX&interval=1min&apikey=ef93728510a94905b54766cbeaafcac9")
  .then((response) => response.json())
  .then((data) => console.log(data))
  let result = json();

  fetch("https://api.twelvedata.com/time_series?symbol=MSFT,EUR/USD,ETH/BTC:Huobi,TRP:TSX&interval=1min&apikey=ef93728510a94905b54766cbeaafcac9")
  .then((response) => response.json())
  .then((data) => console.log(data))
  let result0 = json();
  

  fetch("https://api.twelvedata.com/time_series?symbol=DIS,EUR/USD,ETH/BTC:Huobi,TRP:TSX&interval=1min&apikey=ef93728510a94905b54766cbeaafcac9")
  .then((response) => response.json())
  .then((data) => console.log(data))
  let result1 = json();


  fetch("https://api.twelvedata.com/time_series?symbol=BNTX,EUR/USD,ETH/BTC:Huobi,TRP:TSX&interval=1min&apikey=ef93728510a94905b54766cbeaafcac9")
  .then((response) => response.json())
  .then((data) => console.log(data))
  let result2 = json();


let GME = result.GME
let MSFT = result0.MSFT
let DIS = result1.DIS
let BNTX = result2.BNTX

const stocks = [GME, MSFT, DIS, BNTX];

stocks.forEach( stock => stock.values.reverse) 

new Chart(timeChartCanvas.getContext('2d'), {
    type: 'line',
    data: {
        labels: stocks[0].values.map(value => value.datetime),
        datasets: stocks.map( stock => ({
            label: stock.meta.symbol,
            data: stock.values.map(value => parseFloat(value.high)),
            backgroundColor:  getColor(stock.meta.symbol),
            borderColor: getColor(stock.meta.symbol),
        }))
    }
});


function getColor(stock){
    if(stock === "GME"){
        return 'rgba(61, 161, 61, 0.7)'
    }
    if(stock === "MSFT"){
        return 'rgba(209, 4, 25, 0.7)'
    }
    if(stock === "DIS"){
        return 'rgba(18, 4, 209, 0.7)'
    }
    if(stock === "BNTX"){
        return 'rgba(166, 43, 158, 0.7)'
    }
}


}

main()