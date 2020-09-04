var maleslider = document.getElementById("male");
var maleoutput = document.getElementById("malevalue");
maleoutput.innerHTML = maleslider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
maleslider.oninput = function() {
    maleoutput.innerHTML = this.value;
    adjustValue1('y', this.value);
  }

var femaleslider = document.getElementById("female");
var femaleoutput = document.getElementById("femalevalue");
femaleoutput.innerHTML = femaleslider.value; // Display the default slider value

femaleslider.oninput = function() {
    femaleoutput.innerHTML = this.value;
    adjustValue1('x', this.value);
  }

var aporaslider = document.getElementById("apora");
var aporaoutput = document.getElementById("aporavalue");
aporaoutput.innerHTML = aporaslider.value; // Display the default slider value

aporaslider.oninput = function() {
    aporaoutput.innerHTML = this.value;
    adjustValue1('z', this.value);
  }

var trace = {
    x:[5],
    y:[5],
    z:[5],
	mode: 'markers',
	marker: {
		size: 12,
		line: {
      color: 'rgba(217, 217, 217, 0.14)',
      width: 0.5
    },
    opacity: 0.8
  },
	type: 'scatter3d'
};

var layout = {
    scene:{
      aspectmode: "manual",
      aspectratio: {
        x: 1, y: 1, z: 1,
      },
      xaxis: {
        title: "female",
        range: [0, 100],
      },
      yaxis: {
        title: "male",
        range: [0, 100],
      },
      zaxis: {
        title: "apora",
        range: [0, 100],
      }
    },
};

var data = [trace];
var config = {responsive: true}
Plotly.newPlot('genderplotter', data, layout, config);

function adjustValue1(axis, value)
{
    Plotly.restyle('genderplotter', axis, [[value]]);
}