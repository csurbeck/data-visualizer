var currentChart;

window.addEventListener('load', init);

function init() {
  incomeData();
  id("count").addEventListener("click", countData);
  id("income").addEventListener("click", clickIncomeData);
}

function incomeData() {
  d3.csv("data/museumIncome.csv")
  .then(plotIncomeData);
}

function clickIncomeData() {
  currentChart.destroy();
  incomeData();
}

function countData() {
  currentChart.destroy();
  d3.csv("data/museumCount.csv")
  .then(plotCountData);
}

function plotIncomeData(states) {
  var stateLabels = states.map(function(d) {return d.State});
  var incomeData = states.map(function(d) {return d.AverageIncome});

  currentChart = new Chart('chart', {
    type: 'bar',
    data: {
      labels: stateLabels,
      datasets: [
        {
          label: "Average Income",
          data: incomeData
        }
      ]
    },
    options: {
      indexAxis: 'y',
    }
  });
}

function plotCountData(states) {
  var stateLabels = states.map(function(d) {return d.State});
  var countData = states.map(function(d) {return d.Count});

  currentChart = new Chart('chart', {
    type: 'bar',
    data: {
      labels: stateLabels,
      datasets: [
        {
          label: "Number of Museums",
          data: countData
        }
      ]
    },
    options: {
      indexAxis: 'y',
    }
  });
}


/**
   * retrieves an HTML element by ID
   * @param {String} id - the id tag for an element in the HTML
   * @returns {Node} - the element from the HTML document
   */
function id(id) {
  return document.getElementById(id);
}
