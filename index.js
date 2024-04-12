document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior:'smooth'
    });
  });
});

document.addEventListener('DOMContentLoaded',function(){
  var Section = document.getElementById('fadeInselection');

  function isInViewport(element){
    var rect = element.getBoundingClientRect();
    return (
      rect.top >=0 &&
      rect.left >0 &&
      rect.bottom <=(window.innerHeight ||document.documentElement.clientHeight) &&
      rect.right <=(window.innerWidth || document.documentElement.clientWidth)
    );
  }
  function fadeInSection(){
    if(isInViewport(Section)){
      Section.classList.add('visible');
      //window.removeEventListener('scroll', fadeInSection);
    }
  }
  window.addEventListener('scroll', fadeInSection)
});