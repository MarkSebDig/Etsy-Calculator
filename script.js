function calculateProfit() {
    // Previous calculation logic, including gathering inputs and calculating profit per discount...
    let profits = []; // Array to store profits for chart

    selectedDiscounts.forEach(discountPercentage => {
        // Existing logic to calculate profit for each discount...
        
        // Append profit to the array for the chart
        profits.push(profit);

        // Adding advanced financial metrics to resultsHTML
        const grossMarginPercentage = ((netSale - (cogsPerItem * quantity)) / netSale) * 100;
        const netMarginPercentage = (profit / netSale) * 100;
        resultsHTML += `<p>Gross Margin: ${grossMarginPercentage.toFixed(2)}%, Net Margin: ${netMarginPercentage.toFixed(2)}%</p>`;
    });

    document.getElementById('result').innerHTML = resultsHTML;

    // After all calculations, generate the profit chart
    generateProfitChart(selectedDiscounts, profits);
}

function exportToCSV() {
    // Adapted exportToCSV function to convert resultsHTML or an array of data into CSV format...
}

function generateProfitChart(labels, data) {
    // Adapted Chart.js logic to use the labels and data arrays for generating the profit comparison chart...
    const ctx = document.getElementById('profitChart').getContext('2d');
    const profitChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels.map(label => `${label}% Discount`),
            datasets: [{
                label: 'Profit',
                data: data,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
