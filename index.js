d3.csv("data/museumIncome.csv")
  .then(plotMuseumData)


function plotMuseumData(states) {
  var stateLabels = states.map(function(d) {return d.State});
  var incomeData = states.map(function(d) {return d.AverageIncome});

  var chart = new Chart('chart', {
    type: 'bar',
    data: {
      labels: stateLabels,
      datasets: [
        {
          data: incomeData
        }
      ]
    },
    options: {
      indexAxis: 'y',
    }
  });
}
