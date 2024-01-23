"use strict"

try {

    const range = document.getElementById("range");
    const rangeProgress = document.getElementById("rangeProgress")

    rangeProgress.innerText = range.value

    range.addEventListener("input", () => {
        rangeProgress.innerText = range.value
    })

} catch (e) {
    console.log(e);
}

try {
    // Кастомный select-option
    const customSelect = document.getElementById("customSelect");
    const customSelectField = customSelect.querySelector(".custom-select__field");
    const customSelectBar = customSelect.querySelector(".custom-select__bar");
    const customSelectItems = customSelect.querySelectorAll(".custom-select__item");
    const customSelectInput = customSelect.querySelector(".custom-select__input")

    customSelectField.addEventListener("click", () => {
        customSelectField.classList.add("custom-select__field_opened")
        customSelectBar.classList.add("custom-select__bar_opened")
    })

    customSelectItems.forEach(item => {
        item.addEventListener("click", () => {
            customSelectField.querySelector("span").innerText = item.querySelector("span").innerText;
            customSelectInput.value = item.querySelector("span").innerText;
            customSelectBar.classList.remove("custom-select__bar_opened");
            customSelectField.classList.remove("custom-select__field_opened");
        })
    })

} catch {
    console.log(e)
}

try {
    const burgerButton = document.getElementById("burgerButton")
    const header = document.querySelector(".header")
    const mobileMenu = document.querySelector(".mobile-menu")
    burgerButton.addEventListener("click", () => {
        burgerButton.classList.toggle("burger_active")
        mobileMenu.classList.toggle("mobile-menu_opened")
        header.classList.toggle("header_opened")
    })
} catch{
    console.log(e)
}