//opens mobile menu
document.querySelector('#icon-hamburger').addEventListener('click', function () {
  document.getElementById('mobile_menu').style.height = '100vh';
  document.querySelector('#icon-hamburger').style.display = 'none';
  //display close icon
  document.querySelector('#icon-close').style.display = 'block';
});

//closes mobile menu
document.querySelector('#icon-close').addEventListener('click', function () {
  document.getElementById('mobile_menu').style.height = '0vh';
  document.querySelector('#icon-hamburger').style.display = 'block';
  //sets close icon to none
  document.querySelector('#icon-close').style.display = 'none';
});
