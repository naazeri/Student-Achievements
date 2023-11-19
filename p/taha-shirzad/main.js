window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader--hidden")

    loader(".loader").addEventListener("transitionend", () => {
        document.body.removeChild(loader(".loader"))
    });
});