const faviouriteIcons = document.querySelectorAll(".favourite-icon");

// Toggle favourite icon on click
faviouriteIcons.forEach(icon => {
    icon.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        if(icon.src.includes("images/favourite-icon-2.png")) {
            icon.src = "images/favourite-icon-active.png";
        } else {
            icon.src = "images/favourite-icon-2.png";
        }
    });
});