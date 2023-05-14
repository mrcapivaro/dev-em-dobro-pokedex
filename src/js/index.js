
const theme_button = document.getElementById("theme-button")
const body = document.querySelector("body")
const theme_button_image = document.querySelector(".theme-button-image")

theme_button.addEventListener("click", () => {
    const theme_button_on = body.classList.contains("dark-theme")
    if (theme_button_on) {
        body.classList.remove("dark-theme")
        theme_button_image.setAttribute("src", "./src/imagens/moon.png")
    } else {
        body.classList.add("dark-theme")
        theme_button_image.setAttribute("src", "./src/imagens/sun.png")
    }
})