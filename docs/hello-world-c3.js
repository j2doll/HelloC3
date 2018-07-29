// hello-world-c3.js

// 'use strict'

function drawChart() {
	const data = {
		columns: [
			['demo', 293, 329, 261, 130, 196, 196]
		],
		selection: {
			enabled: true
		}
	}

	const chart = c3.generate({
		bindto: '#chart',
		data: data
	})

	const ac = new AudioChart({
		'type': 'c3',          // (see the docs)
		'data': data,          // the C3-format data object
		'chart': chart,        // the in-memory C3 chart object
		'duration': 5000,      // milliseconds
		'frequencyLow': 200,   // Hz
		'frequencyHigh': 600,  // Hz
		'chartContainer': document.getElementById('chart')  // HTMLElement e.g. HTMLDivElement
	})

	document.getElementById('play').onclick = function() {
		ac.playPause()
	}
}

drawChart()

