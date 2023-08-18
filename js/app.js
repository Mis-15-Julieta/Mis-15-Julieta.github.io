const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu() {
  menu.classList.toggle ("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const menuLink = document.querySelector(`.menu a[href="#${id}"]`);

      if (entry.isIntersecting) {
        document.querySelector(".menu a.selected").classList.remove("selected");
        menuLink.classList.add("selected");
      }
    });
  },
  { rootMargin: "-30% 0px -70% 0px" }
);

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", function () {
    menu.classList.remove("menu_opened");
  });

  const hash = menuLink.getAttribute("href");
  const target = document.querySelector(hash);
  if (target) {
    observer.observe(target);
  }
});






/* Cuando hago CLICK .button, .nav TOGGLE 'activo' */
const button = document.querySelector('.button')
const nav    = document.querySelector('.nav')

if (typeof foo !== 'undefined') {
button.addEventListener('click', ()=>{
    nav.classList.toggle('activo') })
}

/* jQuery : Enlazar jQuery*/
/* $('.button').on('click',()=>{
    $('.nav').toggleClass('activo')
}) */



//boton screenView


$(".btnScreenView").on("click", function(){
  $(".btnScreenView").toggleClass("btnScreenMinimize");
  $(".formContainer").toggleClass("screenView100");

});


// Enviar form Ajax
  
 /* $('form.ajax').submit(function(evento){
    evento.preventDefault();
    console.log(evento);
    console.log($(this));
 
    let objectForm = $(this);
    sendMethod = objectForm.attr('method'),
    sendUrl =  objectForm.attr('action'),
    sendData = {};
    objectForm.find("[name]").each(function(index, formItem){
      
      let item = $(this),

      name  = item.attr('name'),
      nameValue = item.val();
      sendData[name] = nameValue;
  
      console.log(item); 
  
  
    });
  console.log(sendData);
  
  
  
  
  $.ajax({
    method: sendMethod,
    url: sendUrl, 
    dataType: 'json',
    accepts: 'application/json',
    data: sendData,
    success: (data) => {
      console.log(data),
      alert("Formulario enviado");
      $('form.ajax')[0].reset();
    
    },
      error: (err) => console.log(err)
  });

  });
  */



  // https://api.jquery.com/jQuery.ajax
/*$.ajax({
  method: 'POST',
  url: 'https://formsubmit.co/ajax/nadia.vero8787@gmail.com',
  dataType: 'json',
  accepts: 'application/json',
  data: {
      name: "FormSubmit",
      message: "I'm from Devro LABS"
  },
  success: (data) => console.log(data),
  error: (err) => console.log(err)
});*/
