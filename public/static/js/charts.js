var exercise_bar = document.getElementById("exercise-bar")
var exercise_bar = new Chart(exercise_bar, {
  type: 'bar',
  data: {
    labels: ['Active', 'Sometimes', 'Almost Never'],
    datasets: [{
      // backgroundColor: [
      //   pattern.draw('diagonal', '#fccb00'),
      //   pattern.draw('diagonal-right-left', '#fccb00'),
      //   pattern.draw('disc', '#fccb00'),
      // ],
      backgroundColor: [
        'rgba(255, 203, 0, 0.6)','rgba(225, 122, 71,.6)','rgba(239, 61, 89,0.6)'
      ],
      borderColor: [
        'rgba(255, 203, 0, 1)','rgba(225, 122, 71,1)','rgba(239, 61, 89,1)'
      ],
      borderWidth: 2,
      boderAlign: 'center',
      hoverBorderColor: [
        'rgba(255, 203, 0, 1)','rgba(225, 122, 71,1)','rgba(239, 61, 89,1)'
      ],
      fillOpacity: 0.5,
      data: [12, 19, 3],
      
    }]
  },
  options: {
    responsive: false, // Instruct chart js to respond nicely.
    maintainAspectRatio: true, // Add to prevent default behaviour of full-width/height 
    plugins: {
      legend: {
        display: false
      }
    },
  }
  
});
var exercise_line = document.getElementById("exercise-line").getContext('2d');
var exercise_line = new Chart(exercise_line, {
    type: 'line',
    data: {
        labels: [1,2,3,4,5,6,7,8,9,10],
        datasets: [{
            label: 'Active', // Name the series
            data: [15,	4,	7,	6,	14,	16,	8,	3,	7, 12], // Specify the data values array
            fill: false,
            opacity: 20,
            borderColor: '#FFCB00', // Add custom color border (Line)
            backgroundColor: '#FFCB00', // Add custom color background (Points and Fill)
            borderWidth: 3, // Specify bar border width
            radius: 1.5
        },
        {
          label: 'Sometimes', // Name the series
          data: [5,	8,	7,	12,	18,	5,	14,	4,	9, 3], // Specify the data values array
          fill: false,
          opacity: 20,
          borderColor: '#E17A47', // Add custom color border (Line)
          backgroundColor: '#E17A47', // Add custom color background (Points and Fill)
          borderWidth: 3, // Specify bar border width
          radius:1.5
      }, 
      {
        label: 'Almost Never', // Name the series
        data: [2,	3,	5,	4,	6,	10,	4,	4,	2, 6], // Specify the data values array
        fill: false,
        opacity: 20,
        borderColor: '#EF3D59', // Add custom color border (Line)
        backgroundColor: '#EF3D59', // Add custom color background (Points and Fill)
        borderWidth: 3, // Specify bar border width
        radius:1.5
    }],

      
      
      },
        
    options: {
      responsive: false, 
      maintainAspectRatio: true, 
      animations: {
        tension: {
          duration: 1000,
          easing: 'linear',
          from: 1,
          to: 0,
          loop: false
        }},
      scales: {
        y: {
          display: true,
          text: "Hello"
        }
      }}
});
