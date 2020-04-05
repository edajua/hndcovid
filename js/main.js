/**
 * Content JS
 */
$(document).ready(function(){
    var ctxBar = $("#myChartBar")[0].getContext("2d");
    var ctxDoughnut = $("#myChartDoughnut")[0].getContext("2d");
    var ctxPie = $("#myChartPie")[0].getContext("2d");
    var ctxLine = $("#myChartLine")[0].getContext("2d");

    var color = Chart.helpers.color;

    window.chartColors = {
        red: 'rgb(255, 99, 132)',
        orange: 'rgb(255, 159, 64)',
        yellow: 'rgb(255, 205, 86)',
        green: 'rgb(75, 192, 192)',
        blue: 'rgb(54, 162, 235)',
        purple: 'rgb(153, 102, 255)',
        grey: 'rgb(201, 203, 207)'
    };

    /**
     * Line Graph
     */
    var timeFormat = 'MM/DD/YYYY HH:mm';
    function newDate(days) {
        return moment().add(days, 'd').toDate();
    }
    function newDateString(days) {
        return moment().add(days, 'd').format(timeFormat);
    }

    var randomScalingFactor = function() {
        return Math.round(Math.random() * 100);
    };

    /**
     * Map
     */
    $(".container-map").mapael({
        map : {
            name : "honduras",
            zoom: {
                enabled:true
			},
			defaultArea: {
				attrs: {
					stroke: "#fff",
					"stroke-width": 1
				},
				attrsHover: {
					"stroke-width": 2
				}
			}
		},
		legend: {
			area: {
				title: "Population of France by department",
				exclusive: true,
				slices: [
					{
						max: 300000,
						attrs: {
							fill: "#97e766"
						},
						label: "Less than de 300 000 inhabitants",
						clicked: true
					},
					{
						min: 300000,
						max: 500000,
						attrs: {
							fill: "#7fd34d"
						},
						label: "Between 100 000 and 500 000 inhabitants"
					},
					{
						min: 500000,
						max: 1000000,
						attrs: {
							fill: "#5faa32"
						},
						label: "Between 500 000 and 1 000 000 inhabitants",
						clicked: true
					},
					{
						min: 1000000,
						attrs: {
							fill: "#3f7d1a"
						},
						label: "More than 1 million inhabitants",
						clicked: true
					}
				]
			}
		},
		areas: {
			"HN-AT": {
				value: "2617939",
				href: "#",
				tooltip: {content: "<span style=\"font-weight:bold;\">Atlantida</span><br />Population : 2617939"}
			},
			"HN-CH": {
				value: "2617939",
				href: "#",
				tooltip: {content: "<span style=\"font-weight:bold;\">Choluteca</span><br />Population : 2617939"}
			},
			"HN-CL": {
				value: "2617939",
				href: "#",
				tooltip: {content: "<span style=\"font-weight:bold;\">Colon</span><br />Population : 2617939"}
			},
			"HN-CM": {
				value: "2617939",
				href: "#",
				tooltip: {content: "<span style=\"font-weight:bold;\">Comayagua</span><br />Population : 2617939"}
			},
			"HN-CP": {
				value: "2617939",
				href: "#",
				tooltip: {content: "<span style=\"font-weight:bold;\">Copan</span><br />Population : 2617939"}
			},
			"HN-CR": {
				value: "2617939",
				href: "#",
				tooltip: {content: "<span style=\"font-weight:bold;\">Cortes</span><br />Population : 2617939"}
			},
			"HN-EP": {
				value: "2617939",
				href: "#",
				tooltip: {content: "<span style=\"font-weight:bold;\">El paraiso</span><br />Population : 2617939"}
			},
			"HN-FM": {
				value: "2617939",
				href: "#",
				tooltip: {content: "<span style=\"font-weight:bold;\">Francisco Morazan</span><br />Population : 2617939"}
			},
			"HN-GD": {
				value: "2617939",
				href: "#",
				tooltip: {content: "<span style=\"font-weight:bold;\">Gracias a Dios</span><br />Population : 2617939"}
			},
			"HN-IN": {
				value: "2617939",
				href: "#",
				tooltip: {content: "<span style=\"font-weight:bold;\">Intibuca</span><br />Population : 2617939"}
			},
			"HN-IB": {
				value: "2617939",
				href: "#",
				tooltip: {content: "<span style=\"font-weight:bold;\">Islas de la Bahia</span><br />Population : 2617939"}
			},
			"HN-LP": {
				value: "2617939",
				href: "#",
				tooltip: {content: "<span style=\"font-weight:bold;\">La Paz</span><br />Population : 2617939"}
			},
			"HN-LE": {
				value: "2617939",
				href: "#",
				tooltip: {content: "<span style=\"font-weight:bold;\">Lempira</span><br />Population : 2617939"}
			},
			"HN-OC": {
				value: "2617939",
				href: "#",
				tooltip: {content: "<span style=\"font-weight:bold;\">Ocotepeque</span><br />Population : 2617939"}
			},
			"HN-OL": {
				value: "2617939",
				href: "#",
				tooltip: {content: "<span style=\"font-weight:bold;\">Olancho</span><br />Population : 2617939"}
			},
			"HN-SB": {
				value: "2617939",
				href: "#",
				tooltip: {content: "<span style=\"font-weight:bold;\">Santa Barbara</span><br />Population : 2617939"}
			},
			"HN-VA": {
				value: "2617939",
				href: "#",
				tooltip: {content: "<span style=\"font-weight:bold;\">Valle</span><br />Population : 2617939"}
			},
			"HN-YO": {
				value: "2617939",
				href: "#",
				tooltip: {content: "<span style=\"font-weight:bold;\">Yoeo</span><br />Population : 2617939"}
			}
		}
    });

    /**
     * Graph
     */
    var myChartBar = new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    }); // End Graph bar

    var myChartDoughNut = new Chart(ctxDoughnut, {
        type: 'doughnut',
			data: {
				datasets: [{
					data: [
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
					],
					backgroundColor: [
						'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
					],
					label: 'Dataset 1'
				}],
				labels: [
					'Red',
					'Blue',
					'Yellow',
					'Green',
					'Purple'
				]
			},
            options: {
                responsive: true,
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Estadistica'
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                }
            }
    }); // End Graph Doughnut

    var myChartPie = new Chart(ctxPie, {
        type: 'pie',
			data: {
				datasets: [{
					data: [
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
					],
					backgroundColor: [
						'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
					],
					label: 'Dataset 1'
				}],
				labels: [
					'Red',
					'Blue',
					'Yellow',
					'Green',
					'Purple'
				]
			},
			options: {
				responsive: true
			}
    }); // End Graph Pie

    var myChartLine = new Chart(ctxLine, {
        type: 'line',
			data: {
				labels: [ // Date Objects
					newDate(0),
					newDate(1),
					newDate(2),
					newDate(3),
					newDate(4),
					newDate(5),
					newDate(6)
				],
				datasets: [{
					label: 'My First dataset',
					backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
					borderColor: window.chartColors.red,
					fill: false,
					data: [
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor()
					],
				}, {
					label: 'My Second dataset',
					backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
					borderColor: window.chartColors.blue,
					fill: false,
					data: [
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor()
					],
				}, {
					label: 'Dataset with point data',
					backgroundColor: color(window.chartColors.green).alpha(0.5).rgbString(),
					borderColor: window.chartColors.green,
					fill: false,
					data: [{
						x: newDateString(0),
						y: randomScalingFactor()
					}, {
						x: newDateString(5),
						y: randomScalingFactor()
					}, {
						x: newDateString(7),
						y: randomScalingFactor()
					}, {
						x: newDateString(15),
						y: randomScalingFactor()
					}],
				}]
			},
			options: {
				title: {
					text: 'Chart.js Time Scale'
				},
				scales: {
					xAxes: [{
						type: 'time',
						time: {
							parser: timeFormat,
							// round: 'day'
							tooltipFormat: 'll HH:mm'
						},
						scaleLabel: {
							display: true,
							labelString: 'Date'
						}
					}],
					yAxes: [{
						scaleLabel: {
							display: true,
							labelString: 'value'
						}
					}]
				},
			}
    }); // End Graph Pie    
});