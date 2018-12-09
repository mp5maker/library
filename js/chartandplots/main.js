window.onload = init;

function init() {
    let myChart = document.getElementById('myChart').getContext('2d');

    // Global Options
    Chart.defaults.global.defaultFontFamily = "Lato";
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#777';

    let massPopChart = new Chart(myChart, {
        type: 'bar', //bar, horizontal bar, pie, line ,doughnut, radar, polarArea
        // type: 'pie', //bar, horizontal bar, pie, line ,doughnut, radar, polarArea
        // type: 'horizontalBar', //bar, horizontal bar, pie, line ,doughnut, radar, polarArea
        // type: 'line', //bar, horizontal bar, pie, line ,doughnut, radar, polarArea
        // type: 'doughnut', //bar, horizontal bar, pie, line ,doughnut, radar, polarArea
        // type: 'radar', //bar, horizontal bar, pie, line ,doughnut, radar, polarArea
        data: {
            labels: ['Boston', 'Worcestor', 'Springfield', 'Lowell', 'Cambridge', 'New Bradford'],
            datasets: [
                {
                    label: 'Population',
                    data: [
                        617594,
                        181045,
                        153060,
                        106519,
                        105162,
                        95072
                    ],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 235, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(255, 99, 132, 0.6)',
                    ],
                    borderWidth: 1,
                    borderColor: '#777',
                    hoverBorderWidth: 1,
                    hoverBorderColor: '#000'
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Largest Cities in Massachusetts',
                fontSize: 25,
            },
            legend: {
                // display: false,
                position: 'right', //top bottom left right
                labels: {
                    fontColor: 'black'
                }
            },
            layout: {
                padding: {
                    left: 50,
                    right: 0,
                    bottom: 0,
                    top: 0,
                }
            },
            tooltips: {
                // enabled: false
            }
        }
    });
}