const scroller1 = scrollama();
const scroller2 = scrollama();

function handleStepEnter1(response) {
  document.querySelectorAll("#scrolly1 .step").forEach(step => step.classList.remove("is-active"));
  response.element.classList.add("is-active");

  document.querySelector("#scrolly1 .graphic-box").textContent = `Box 1 - Step ${response.index + 1}`;
}

function handleStepEnter2(response) {
  document.querySelectorAll("#scrolly2 .step").forEach(step => step.classList.remove("is-active"));
  response.element.classList.add("is-active");

  document.querySelector("#scrolly2 .graphic-box").textContent = `Box 2 - Step ${response.index + 4}`;
}

function init() {
  scroller1
    .setup({
      step: "#scrolly1 .step",
      offset: 0.6
    })
    .onStepEnter(handleStepEnter1);

  scroller2
    .setup({
      step: "#scrolly2 .step",
      offset: 0.6
    })
    .onStepEnter(handleStepEnter2);

  window.addEventListener("resize", () => {
    scroller1.resize();
    scroller2.resize();
  });
}

init();
