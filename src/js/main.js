"use strict"

/*Обработка бургер кнопки в мобильном меню*/
try {
    const menuBtn = document.querySelector('.menu-btn');
    let menuOpen = false;
    menuBtn.addEventListener('click', () => {
        if (!menuOpen) {
            menuBtn.classList.add('open');
            menuOpen = true;
            document.querySelector('.mobile-header__nav').classList.add("open")
        } else {
            menuBtn.classList.remove('open');
            document.querySelector('.mobile-header__nav').classList.remove("open")
            menuOpen = false;
        }
    });
} catch (e) {
    console.log(e)
}

/*Фиксирование шапки*/
// try {
//     let apiKey = "db5536301b0dcd426791d3a18f810629"
//     fetch(`https://api.openweathermap.org/data/3.0/?lat=42&lon=47&exclude=current&appid=${apiKey}`).then(response => {
//         console.log(response)
//     })

// } catch (e) {
//     console.log(e)
// }

try {

    $(document).ready(function () {
        const swiper = new Swiper('.swiper', {
            speed: 400,
            spaceBetween: 32,
            loop: false,
            breakpoints: {
                0: {
                    slidesPerView: "auto",
                    spaceBetween: 16,
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: 18,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 32,
                },
                1710: {
                    slidesPerView: 4,
                }
            },
            pagination: {
                el: '.swiper-bullets',
                type: 'bullets',
            }
        });
        const tabItems = document.querySelectorAll(".area-mix__tabs_item")
        const slidesArray = document.querySelectorAll(".area-mix__slider_item");

        tabItems.forEach(tab => {
            tab.addEventListener("click", (e) => {
                if (tab.classList.contains("active")) {
                    e.preventDefault()
                } else {
                    if (tab.dataset.filter !== "all") {
                        let sliderCounter = 0;
                        for (let i = 0; i < slidesArray.length; i++) {
                            if (slidesArray[i].classList.contains(tab.dataset.filter.replace(".", ""))) {
                                slidesArray[i].style.display = "none"
                            }
                            sliderCounter++
                        }
                    } else {
                        let sliderCounter = 0;
                        for (let i = 0; i < slidesArray.length; i++) {
                            slidesArray[i].style.display = "block"
                            sliderCounter++
                        }
                    }
                    setTimeout(() => {
                        swiper.update()
                    }, 100)
                }
            })
        })
        const mixer = $('#areaMixer').mixItUp({
            animation: {
                duration: 0,
            },
            selectors: {
                filter: '.area-mix__tabs_item'
            },
        });
        const options = document.querySelectorAll(".area-mix__select select option")
        const select = document.querySelector(".area-mix__select select")
        select.addEventListener("change", () => {
            options.forEach(option => {
                if (option.selected) {
                    $('#areaMixer').mixItUp("filter", option.value)
                    setTimeout(() => {
                        swiper.update()
                    }, 100)
                }
            })
        })

    });

} catch (e) {
    console.log(e);
}

try {
    (function () {
        Bnovo_Widget.init(function () {
            Bnovo_Widget.open('_bn_widget_', {
                type: "horizontal",
                uid: "e49f2f15-b4cd-4919-99cc-49896eac32ff",
                lang: "ru",
                width: "100%",
                width_mobile: "300",
                background: "#000000",
                background_mobile: "#ffffff",
                bg_alpha: "0",
                bg_alpha_mobile: "100",
                border_color_mobile: "#C6CAD3",
                padding: "40",
                padding_mobile: "24",
                border_radius: "10",
                button_font_size: "14",
                button_height: "42",
                font_type: "inter",
                title_color: "#FFF",
                title_color_mobile: "#242742",
                title_size: "22",
                title_size_mobile: "22",
                inp_color: "#FFF",
                inp_bordhover: "#dedfe3",
                inp_bordcolor: "#C4C4C4",
                inp_alpha: "0",
                btn_background: "#325B50",
                btn_background_over: "#325B50",
                btn_textcolor: "#FFFFFF",
                btn_textover: "#FFFFFF",
                btn_bordcolor: "#325B50",
                btn_bordhover: "#325B50",
                adults_default: "1",
                dates_preset: "on",
                dfrom_today: "on",
                dfrom_value: "2",
                dto_nextday: "on",
                dto_value: "2",
                cancel_color: "#FFFFFF",
                switch_mobiles_width: "800",
            });
        });
    })();
} catch (e) {
    console.error(e)
}

try {
    window.onscroll = function () {
        if (document.body.scrollTop > 118 || document.documentElement.scrollTop > 118) {
            document.querySelector(".header").classList.add("white-header")
        } else {
            document.querySelector(".header").classList.remove("white-header")
        }
    }
} catch (e) {
    console.log(e);
}


/* Карусель */
try {

    initMarquee(528, 24)

    initSecondMarquee(528, 24)

    function initMarquee(boxWidth, time) {
        const boxElement = $('.activity__item');
        const boxLength = boxElement.length;
        const wrapperWidth = boxWidth * boxLength;
        const windowWidth = $(window).width();

        boxElement.parent().css('left', '-' + boxWidth + 'px');
        boxElement.css('width', boxWidth + 'px');

        gsap.set(".activity__item", {
            x: (i) => i * boxWidth
        });

        gsap.to(".activity__item", {
            duration: time,
            ease: "none",
            x: "-=" + wrapperWidth,
            modifiers: {
                x: gsap.utils.unitize(
                    function (x) {
                        return parseFloat(x + windowWidth + boxWidth) % wrapperWidth
                    }
                )
            },
            repeat: -1
        });

    }

    function initSecondMarquee(boxWidth, time) {
        const boxElement = $('.activity__second-item');
        const boxLength = boxElement.length;
        const wrapperWidth = boxWidth * boxLength;
        const windowWidth = $(window).width();

        boxElement.parent().css('left', '-' + boxWidth + 'px');
        boxElement.css('width', boxWidth + 'px');

        gsap.set(".activity__second-item", {
            x: (i) => i * boxWidth
        });

        gsap.to(".activity__second-item", {
            duration: time,
            ease: "none",
            x: "+=" + wrapperWidth,
            modifiers: {
                x: gsap.utils.unitize(
                    function (x) {
                        return parseFloat(x + windowWidth + boxWidth) % wrapperWidth
                    }
                )
            },
            repeat: -1
        });

    }

} catch (e) {
    console.log(e);
}

/* Подгрузка отзывов */
try {

    class FeedbackAPI {
        constructor(url) {
            this.url = url;
            this.page = 1;
            this.total_pages = 0;
        }

        async getFeedback() {
            const response = await fetch(this.url + `api/users?page=${this.page}`)
            const feedbackList = await response.json()
            this.total_pages = feedbackList.total_pages;
            const feedbackWrapper = document.querySelector(".feedback__cards")
            for (let i = 0; i < feedbackList.data.length; i++) {
                let feedback = document.createElement("div");
                feedback.classList.add("card-feedback");
                feedback.innerHTML = `
                <div class="card-feedback__description">
                    <p>
                        ${feedbackList.data[i].email}
                    </p>
                </div>
                <div class="card-feedback__title">
                ${feedbackList.data[i].first_name}
                </div>
                <div class="card-feedback__date">
                ${feedbackList.data[i].last_name}
                </div>
                <div class="card-feedback__image">
                    <div class="card-feedback__image_icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <path d="M35 35L27.75 27.75M18.3333 13.3333V23.3333M13.3333 18.3333H23.3333M31.6667 18.3333C31.6667 25.6971 25.6971 31.6667 18.3333 31.6667C10.9695 31.6667 5 25.6971 5 18.3333C5 10.9695 10.9695 5 18.3333 5C25.6971 5 31.6667 10.9695 31.6667 18.3333Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </div>
                <img src="${feedbackList.data[i].avatar}" alt="feedback-preview">
                </div>
                `
                feedbackWrapper.append(feedback);
                if (i >= 1) {
                    break;
                }
            }
            if (this.page === this.total_pages) {
                document.querySelector(".feedback__more").remove();
            }
            this.page++;

            document.querySelectorAll(".card-feedback__image").forEach(image => {
                image.addEventListener("click", () => {
                    document.querySelector(".layout").classList.add("active");
                    document.querySelector(".image-modal").classList.add("active");
                    document.querySelector(".image-modal").querySelector("img").src = image.querySelector("img").src;
                    document.querySelector("body").classList.add("scroll-lock")
                })
            })
        }
    }

    const feedbackController = new FeedbackAPI("https://reqres.in/");
    document.querySelector(".feedback__more button").addEventListener("click", () => {
        feedbackController.getFeedback();
    })


} catch (e) {
    console.log(e);
}

/*Маска на телефон*/
try {
    $('input[data-type="phone"]').inputmask({
        // "mask": "+7 (999) 999-99-99",
        "mask": "+7 (999) 999-99-99",
        "placeholder": "+7 (___) ___ __ __",
        "removeMaskOnSubmit": true,
        "showMaskOnFocus": false,
        "showMaskOnHover": false,
    });
} catch (e) {
    console.log(e)
}

/*Обработка формы в главном баннере*/
try {
    const form = document.getElementById("heroForm")
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let name = form.querySelector("#heroName");
        let phone = form.querySelector("#heroPhone");
        let validator = true;

        if (name.value.length < 3) {
            name.classList.add('input-error')
            validator = false;
        }

        if (validator) {
            const formData = new FormData();
            formData.append('name', name.value);
            formData.append('phone', phone.value);
            $.ajax({
                url: "https://reqres.in/api/users",
                method: "POST",
                data: formData,
                processData: false,
                error: (msg) => {
                    console.log(msg)
                },
                success: (data) => {
                    console.log(data);
                    form.querySelector(".hero-form__wrapper").style.display = "none";
                    form.querySelector(".hero-response").classList.add("active");
                }
            })
        }
    })

    let clearButton = form.querySelector(".hero-response__button button")
    clearButton.addEventListener("click", () => {
        form.querySelector(".hero-form__wrapper").style.display = "flex";
        form.querySelector(".hero-response").classList.remove("active");

        form.reset();
    })
} catch (e) {
    console.log(e);
}


/*Обработка формы в блоке мероприятия*/
try {

    const eventForm = document.getElementById("eventForm")
    eventForm.addEventListener("submit", (e) => {
        e.preventDefault();

        let eventName = eventForm.querySelector("#eventName");
        let eventPhone = eventForm.querySelector("#eventPhone");
        let validator = true;

        if (eventName.value.length < 3) {
            eventName.classList.add('input-error')
            validator = false;
        }

        if (validator) {
            const eventFormData = new FormData();
            eventFormData.append('name', eventName.value);
            eventFormData.append('phone', eventPhone.value);
            $.ajax({
                url: "https://reqres.in/api/users",
                method: "POST",
                data: eventFormData,
                processData: false,
                error: (msg) => {
                    console.log(msg)
                },
                success: (data) => {
                    console.log(data);
                    eventForm.style.display = "none";
                    eventForm.parentElement.querySelector(".event-form-response").classList.add("active");
                }
            })
        }
    })

} catch (e) {
    console.log(e)
}

//Скролл iframe

try {

    const map = document.querySelector(".map")
    document.addEventListener("keydown", (event) => {
        if (event.keyCode === 17) {
            map.classList.remove("blocked-map")
        }
    })

    document.addEventListener("keyup", (event) => {
        console.log("UP!!")
        console.log(event.keyCode)
        if (event.keyCode === 17) {
            map.classList.add("blocked-map")
        }
    })
} catch (e) {
    console.log(e);
}

/* Превью изображений */

try {

    const allImages = document.querySelectorAll(".card-feedback__image");

    const layout = document.querySelector(".layout");
    const imageModal = document.querySelector(".image-modal");

    allImages.forEach(image => {
        image.addEventListener("click", () => {
            layout.classList.add("active");
            imageModal.classList.add("active");
            imageModal.querySelector("img").src = image.querySelector("img").src;
            document.querySelector("body").classList.add("scroll-lock")
        })
    })

    layout.addEventListener("click", () => {
        layout.classList.remove("active");
        imageModal.classList.remove("active");
        document.querySelector("body").classList.remove("scroll-lock")
    })

} catch (e) {
    console.log(e);
}

//Скролл до блоков
try {

    const allSections = document.querySelectorAll(".section-block")
    const allHeaderItems = document.querySelectorAll(".header__menu ul li")

    const allMobileItems = document.querySelectorAll(".mobile-header__item")

    allHeaderItems.forEach(head => {
        head.addEventListener("click", () => {
            allHeaderItems.forEach(anotherHead => {
                anotherHead.classList.remove("current");
            })
            head.classList.add("current")
            allSections.forEach(section => {
                if (head.dataset.name === section.dataset.name) {
                    let offsetFromTop = section.offsetTop - 110
                    if (section.dataset.name === "way") {
                        offsetFromTop -= 30
                    }
                    if (section.dataset.name === "events") {
                        offsetFromTop += 500
                    }
                    window.scrollTo({ top: offsetFromTop, behavior: "smooth" })
                }
            })
        })

    })

    allMobileItems.forEach(head => {
        head.addEventListener("click", () => {
            document.querySelector('.menu-btn').classList.remove('open');
            document.querySelector('.mobile-header__nav').classList.remove("open")
            allSections.forEach(section => {
                if (head.dataset.name === section.dataset.name) {
                    let offsetFromTop = section.offsetTop - 50
                    // if (section.dataset.name === "way") {
                    //     offsetFromTop -= 30
                    // }
                    // if (section.dataset.name === "events") {
                    //     offsetFromTop += 500
                    // }
                    window.scrollTo({ top: offsetFromTop, behavior: "smooth" })
                }
            })
        })

    })

} catch (e) {
    console.log(e)
}

try {

    function fromOpacityScale() {

        let elements = document.querySelectorAll('[data-gsap="fromOpacityScale"]');

        elements.forEach(ele => {
            // animation
            let anim = gsap.from(ele, {
                autoAlpha: 0,
                scale: 0.5,
                ease: 'power1.out',
                duration: 1,
                delay: 0,
            });

            // scroll
            ScrollTrigger.create({
                animation: anim,
                trigger: ele,
                start: "top bottom",
                end: "center 70%",
                scrub: 2,
                once: true,
                immediateRender: false,
                markers: false
            });

        });

    } // .function


    function fromLeftTransition(){
        let elements = document.querySelectorAll('[data-gsap="fromLeftTransition"]');

        elements.forEach(ele => {
            // animation
            let anim = gsap.from(ele, {
                autoAlpha: 0,
                ease: 'power1.out',
                duration: 1,
                delay: 0,
            });

            // scroll
            ScrollTrigger.create({
                animation: anim,
                trigger: ele,
                start: "top bottom",
                end: "center 70%",
                scrub: 2,
                once: true,
                immediateRender: false,
                markers: false
            });

        });
    }

    document.addEventListener("DOMContentLoaded", function (e) {
        fromOpacityScale();
    });
} catch (e) {
    console.log(e);
}