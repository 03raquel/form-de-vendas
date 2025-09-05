document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const submitBtn = document.querySelector(".btn-submit");
  const titleInput = document.getElementById("title");
  const descInput = document.getElementById("description");

  submitBtn.style.position = "relative";

  form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    alert("Produto enviado com sucesso! 🚀");
  });

  const titleMax = 30;
  const titleCounter = document.createElement("span");
  titleCounter.style.fontSize = "12px";
  titleCounter.style.color = "#666";
  titleInput.parentElement.appendChild(titleCounter);

  titleInput.addEventListener("input", () => {
    titleCounter.textContent = `${titleInput.value.length}/${titleMax} caracteres`;
  });

  
  const descMax = 200;
  const descCounter = document.createElement("span");
  descCounter.style.fontSize = "12px";
  descCounter.style.color = "#666";
  descInput.parentElement.appendChild(descCounter);

  descInput.addEventListener("input", () => {
    descCounter.textContent = `${descInput.value.length}/${descMax} caracteres`;
  });

  form.addEventListener("input", () => {
    const allFilled = [...form.elements].every(input => (input.required ? input.value.trim() !== "" : true));
    submitBtn.style.backgroundColor = allFilled ? "#673ab7" : "#aaa";
  });

  submitBtn.addEventListener("mouseover", () => {
    const allFilled = [...form.elements].every(input => (input.required ? input.value.trim() !== "" : true));
    if (!allFilled) {
      const x = Math.random() * 40 - 20;
      const y = Math.random() * 40 - 20;
      submitBtn.style.transform = `translate(${x}px, ${y}px)`;
    } else {
      submitBtn.style.transform = "translate(0,0)";
    }
  });

  submitBtn.addEventListener("mouseout", () => {
    submitBtn.style.transform = "translate(0,0)";
  });
});
  