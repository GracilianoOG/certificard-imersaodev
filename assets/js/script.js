(() => {
    const botaoAlteraTema = document.querySelector("[data-tema]");
    botaoAlteraTema.addEventListener("click", () => {
        document.body.classList.toggle("dark");
    });
    console.log("botaoAlteraTema")
})();