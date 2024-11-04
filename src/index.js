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
const sidebarId = "sidebar";
const hiddenClassName = "hidden";
let sidebar = document.getElementById(sidebarId);

function toggleSidebarVisibility(){
    let sidebarClassList = sidebar.classList;
    sidebarClassList.contains(hiddenClassName) ? sidebarClassList.remove(hiddenClassName): sidebarClassList.add(hiddenClassName)

}

document.addEventListener("DOMContentLoaded", () => {
    linkBoxes();
    document.querySelectorAll("[data-action='sidebar-toogle']")
    .forEach(element => element.addEventListener("click", toggleSidebarVisibility)
)
});