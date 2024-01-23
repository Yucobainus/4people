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
        customSelectField.classList.toggle("custom-select__field_opened")
        customSelectBar.classList.toggle("custom-select__bar_opened")
    })

    customSelectItems.forEach(item => {
        item.addEventListener("click", () => {
            customSelectField.querySelector("span").innerText = item.querySelector("span").innerText;
            customSelectInput.value = item.querySelector("span").innerText;
            customSelectBar.classList.remove("custom-select__bar_opened");
            customSelectField.classList.remove("custom-select__field_opened");
        })
    })

    document.addEventListener('mouseup', function (e) {
        if (!customSelect.contains(e.target)) {
            customSelectField.classList.remove("custom-select__field_opened")
            customSelectBar.classList.remove("custom-select__bar_opened")
        }
    });
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
} catch {
    console.log(e)
}

try {


    const fadeInAnimation = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in-animated")
            }
        });
    }
    const fromLeftAnimation = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("from-left-animated")
            }
        });
    }
    const opacityAnimation = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("opacity-animated")
            }
        });
    }
    const fromBottomAnimation = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("from-bottom-animated")
            }
        });
    }

    const options = {
        threshold: 1 // 1 – полная видимость элемента, 0.5 – половина и т.д.
    }
    const fadeInObserver = new IntersectionObserver(fadeInAnimation, options);
    const fromLeftObserver = new IntersectionObserver(fromLeftAnimation, options);
    const opacityObserver = new IntersectionObserver(opacityAnimation, options);
    const fromBottomObserver = new IntersectionObserver(fromBottomAnimation, options);


    const fadeIn = '.fade-in-animation';
    document.querySelectorAll(fadeIn).forEach((i) => {
        if (i) {
            fadeInObserver.observe(i);
        }
    });

    const fromLeft = '.from-left-animation';
    document.querySelectorAll(fromLeft).forEach((i) => {
        if (i) {
            fromLeftObserver.observe(i);
        }
    });

    const opacity = '.opacity-animation';
    document.querySelectorAll(opacity).forEach((i) => {
        if (i) {
            opacityObserver.observe(i);
        }
    });

    const fromBottom = '.from-bottom-animation';
    document.querySelectorAll(fromBottom).forEach((i) => {
        if (i) {
            fromBottomObserver.observe(i);
        }
    });
} catch (e) {
    console.log(e);
}