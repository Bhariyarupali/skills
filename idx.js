let profile = document.querySelector('.profile');
document.querySelector('#user-btn').onclick = () => {
profile.classList.toggle('active');
    
}
let searchform = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchform.classList.toggle('active');
// profile.classList.remove('active');
    
    
}
let sidebar = document.querySelector('.side-bar');
document.querySelector('#menu-btn').onclick = () => {
    sidebar.classList.toggle('active');
    ReportBody.classList.toggle('active');
}
window.onscroll = () => {
    profile.classList.remove('active');
searchform.classList.remove('active');
    
    
}

let settingbtn = document.querySelector("#setting-btn");
let darkmode = localStorage.getItem('dark-mode');

const enabelDarkMode = () => {
}