function setup(htmlComponent) {					  
  document.getElementById('formData').addEventListener('submit', function(event) {
    htmlComponent.Data = {
      'I1': document.getElementById('ageAnswer').value, 
      'I2': document.getElementById('tempAnswer').value, 
      'I3': document.getElementById('lungAnswer').value,
      'I4': document.getElementById('heartAnswer').value,
      'I5': document.getElementById('diabetesAnswer').value,		
      'I6': document.getElementById('hivAnswer').value,
      'I7': document.getElementById('coughAnswer').value,
      'I8': document.getElementById('chemoAnswer').value,
      'I9': document.getElementById('smokeAnswer').value,
      'I10': document.getElementById('alcoholAnswer').value,
      'I11': document.getElementById('chemicalAnswer').value,
      'I12': document.getElementById('swallowAnswer').value,
      'I13': document.getElementById('sweatingAnswer').value,
      'I14': document.getElementById('breatheAnswer').value,
      'I15': document.getElementById('chestAnswer').value,
      'I16': document.getElementById('appetiteAnswer').value,
      'I17': document.getElementById('fatigueAnswer').value,
      'I18': document.getElementById('nauseaAnswer').value,
      'I19': document.getElementById('confusionAnswer').value,
      'I20': document.getElementById('hospitalAnswer').value,
      'I21': document.getElementById('ventilatorAnswer').value,
    };
  })
}

var slideIndex = 1;
  showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide-container");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 0}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}