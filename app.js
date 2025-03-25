const ul = document.querySelector('.menu ul');
const menu = document.querySelector('.burger');
menu.addEventListener('click', () => {
   ul.classList.toggle('is-active');
   console.log('bonjour');
   

});
document.addEventListener("DOMContentLoaded", function () {
   const menuToggle = document.querySelector(".menu-toggle");
   const menu = document.querySelector(".menu ul");

   menuToggle.addEventListener("click", function () {
       menu.classList.toggle("active");
   });
});