window.onload = function() {
  var space = new CanvasSpace('background').setup({
    bgcolor: 'transparent',
    resize: true
  });
  var form = new Form(space);
  var xbase = 0;
  var xoff = 0;
  var xTotalShift = 2.5;
  var yoff = 30;
  var yTotalShift = 2.5;
  var yFocalPoint = space.center.y;
  var zoff = 30;

  var lineCount = 8;
  var lineMargin = space.size.$divide(lineCount);
  var pointCount = 80;
  var pointMargin = space.size.$divide(pointCount);

  /* Hover action */
  var hoverActive = true;

  function calculateMargins() {
    lineMargin = space.size.$divide(lineCount);
    pointMargin = space.size.$divide(pointCount);
  }
  window.addEventListener('resize', function() {
    calculateMargins();
  });
  function handleMouseOver(index) {
    hoverActive = true;
    calculateMargins();
  }
  function handleMouseLeave(index) {
    hoverActive = false;
    calculateMargins();
  }

  setTimeout(function() {
    document.querySelector('#background').classList.add('visible');
  }, 500);
  setTimeout(function() {
    Array.prototype.slice.call(document.querySelectorAll('.experiment'))
    .map(function(element, index) {
      element.classList.add('visible');
    });
  }, 600);

  // target: [0, 1]
  var hoverEasing = 0;
  var hoverEasingTarget = 0;

  space.add({
    animate: function(time, fps, ctx) {
      var delta = hoverEasingTarget - hoverEasing;
      if (Math.abs(delta) > 0.05) {
        hoverEasing += delta * 0.1;
      }
      ctx.clearRect(0, 0, space.size.x, space.size.y);
      for (var i = 0; i < lineCount; i++) {
        var points = [];
        xoff = i * yTotalShift / lineCount + xbase;
        for (var j = 0; j < pointCount + 1; j++) {
          points.push(
            new Vector({
              x: j * pointMargin.x,
              y: Math.round(i * lineMargin.y + lineMargin.y / 2)
              + Util.mapToRange(noise.perlin3(xoff, yoff, zoff), -1, 1, -200, 200)
            })
          )
          xoff += xTotalShift / pointCount;
        }
        form.stroke('rgba(0,0,0,0.1)', 2);
        form.curve(points);
      }
      hoverActive ? xbase += 0.001 : xbase += 0.005;
      hoverActive ? zoff += 0.001 : zoff += 0.008;
    }
  });
  space.play();
  }