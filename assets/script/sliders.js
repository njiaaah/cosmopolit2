  function initializeSlider(startingValues, sliderId, minId, maxId) {
    var minValue = startingValues.minValue || 0;
    var maxValue = startingValues.maxValue || 100;
    var minStartingValue = startingValues.minStartingValue || 20;
    var maxStartingValue = startingValues.maxStartingValue || 80;
    var stepValue = startingValues.stepValue || 1;

    var slider = document.getElementById(sliderId);
    noUiSlider.create(slider, {
      start: [minStartingValue, maxStartingValue],
      connect: true,
      step: stepValue,
      behaviour: 'drag',
      range: {
        'min': minValue,
        'max': maxValue
      }
    });

    slider.noUiSlider.on('update', function (values) {
      document.getElementById(minId).textContent = parseFloat(values[0]).toFixed(0);
      document.getElementById(maxId).textContent = parseFloat(values[1]).toFixed(0);
    });
  }

  // init example
  
  // initializeSlider({ minValue: 20, maxValue: 150, minStartingValue: 20, maxStartingValue: 150, stepValue: 1 }, 'slider1', 'min-value1', 'max-value1');

