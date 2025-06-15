 
    new Chart(document.getElementById('polarChart'), {
      type: 'polarArea',
      data: {
        labels: ['Stocks', 'Bonds', 'ETFs', 'Crypto'],
        datasets: [{
          data: [5000, 2000, 3000, 1000],
          backgroundColor: ['#3b8beb', '#a0a0a0', '#cfcfcf', '#8b572a']
        }]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Investment Distribution'
          }
        }
      }
    });

    
    new Chart(document.getElementById('pieChart'), {
      type: 'pie',
      data: {
        labels: ['Tech', 'Healthcare', 'Energy', 'Finance'],
        datasets: [{
          data: [40, 25, 15, 20],
          backgroundColor: ['#aec6cf', '#bfae94', '#909ba3', '#6f4e37']
        }]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Sector Allocation'
          }
        }
      }
    });

    
    new Chart(document.getElementById('lineChart'), {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Portfolio Growth ($)',
          data: [10000, 12000, 14000, 13000, 15000, 17000],
          borderColor: '#6b6b6b',
          backgroundColor: 'rgba(107, 107, 107, 0.2)',
          fill: true,
          tension: 0.3
        }]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Portfolio Growth ($)'
          }
        },
        scales: {
          y: {
            beginAtZero: false
          }
        }
      }
    });

    
    new Chart(document.getElementById('barChart'), {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
          label: 'Monthly Expenses ($)',
          data: [500, 600, 700, 800, 900, 1000],
          backgroundColor: '#ff6b6b'
        }]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Monthly Expenses ($)'
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });