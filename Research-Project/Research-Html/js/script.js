// This is navbar toggle arrow <<
const closeToggleBtn = document.getElementById("closeToggleBtn");
const openSideBar = document.getElementById("openSideBar");
const mainContent = document.getElementById("mainContent");
const navbarHeading = document.getElementById("navbarHeading");
closeToggleBtn.addEventListener("click", () => {
    openSideBar.classList.toggle("left-400");
    mainContent.classList.toggle("left-0");
    navbarHeading.classList.toggle("left-0")
    closeToggleBtn.classList.toggle("left-sidebar-toggle-turn");
});
// Show userProfile drop down
const defaultDropdown = document.getElementById("defaultDropdown");
defaultDropdown.addEventListener("click", () => {
    const showDropDown = document.getElementById("showDropDown");
    showDropDown.classList.toggle("show");

});

// show side-bar when click on hamburger
let hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", () => {
    const openSideBar = document.getElementById("openSideBar");
    openSideBar.classList.toggle("left-sidebar-open")
    // alert("click")
})
