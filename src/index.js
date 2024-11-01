function linkBoxes() {
    var boxes = document.querySelectorAll(".category-card");
    boxes.forEach(function (box) {
        var link = box.querySelector("a");
        if (link) {
            var url = link.getAttribute("href");
            box.addEventListener("click", () => window.open(url, "_blank"));
        }
    });
}


document.addEventListener("DOMContentLoaded", () => linkBoxes());
