import head from "lodash/head";

(function () {
  const input = {
    mouseX: {
      start: 0,
      end: window.innerWidth,
      current: 0,
    },
    mouseY: {
      start: 0,
      end: window.innerHeight,
      current: 0,
    },
  };
  input.mouseX.range = input.mouseX.end - input.mouseX.start;
  input.mouseY.range = input.mouseY.end - input.mouseY.start;

  const output = {
    x: {
      start: -80,
      end: 80,
      current: 0,
    },
    y: {
      start: -80,
      end: 80,
      current: 0,
    },
  };
  output.x.range = output.x.end - output.x.start;
  output.y.range = output.y.end - output.y.start;

  const pupils = document.getElementsByClassName("pupil");
  const pupilList = Array.from(pupils);

  const onMouseMove = (event) => {
    // Mouse X
    input.mouseX.current = event.clientX;
    input.mouseX.fraction =
      (input.mouseX.current - input.mouseX.start) / input.mouseX.range;

    // Mouse Y
    input.mouseY.current = event.clientY;
    input.mouseY.fraction =
      (input.mouseY.current - input.mouseY.start) / input.mouseY.range;

    // Output
    output.x.current = output.x.start + input.mouseX.fraction * output.x.range;
    output.y.current = output.y.start + input.mouseY.fraction * output.y.range;

    pupilList.forEach((pupil, _index) => {
      if (_index == 0) {
        pupil.style.transform = `translate(${output.x.current}px, ${output.y.current}px)`;
      } else {
        pupil.style.transform = `translate(${output.x.current}px, ${output.y.current}px)`;
      }
    });
  };
  window.addEventListener("mousemove", onMouseMove);

  const onResize = () => {
    input.mouseX.end = window.innerWidth;
    input.mouseX.range = input.mouseX.end - input.mouseX.start;

    input.mouseY.end = window.innerHeight;
    input.mouseY.range = input.mouseY.end - input.mouseY.start;
  };

  window.addEventListener("resize", onResize);
})();
