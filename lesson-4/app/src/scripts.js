window.onload = function() {
    let value = 0;

    let menu = document.getElementById("menu");

    window.onscroll = function () {
        let scrolled = window.pageYOffset || document.documentElement.scrollTop;

        if (value > scrolled) {
            if (!menu.classList.contains("header-menu--is-visible")) {
                menu.classList.add("header-menu--is-visible");
            }
        } else {
            if (menu.classList.contains("header-menu--is-visible")) {
                menu.classList.remove("header-menu--is-visible");
                console.log("qq");
            }
        }

        value = scrolled;

        if (value > 100) {
            if (!menu.classList.contains("header-menu--is-fixed")) {
                menu.classList.add("header-menu--is-fixed");
            }
        } else if (value == 0) {
            menu.classList.remove("header-menu--is-fixed");
            menu.classList.remove("header-menu--is-visible");
        }
    }
}