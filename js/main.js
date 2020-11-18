// Sticky Menu 
window.addEventListener('scroll', function () {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  }
  else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});

document.querySelectorAll('#navbar a, .btn').forEach(function (element) {
  element.addEventListener('click', function(event) {
    event.preventDefault();

    const id = element.getAttribute('href')
    const section = document.querySelector(id)

    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: section.offsetTop
    });
  })
})
