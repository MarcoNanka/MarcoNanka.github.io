const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".bigscreennav .containernavbar ul li");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    };
    
  });
});



const toggle = document.getElementById("toggle");
const theme = window.localStorage.getItem("theme");

if (theme === "dark") document.body.classList.add("dark");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (theme === "dark") {
    window.localStorage.setItem("theme", "light");
    

  } else window.localStorage.setItem("theme", "dark");
});
const toggle2 = document.getElementById("toggle2");
const theme2 = window.localStorage.getItem("theme");

if (theme2 === "dark") document.body.classList.add("dark");

toggle2.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (theme2 === "dark") {
    window.localStorage.setItem("theme", "light");
    

  } else window.localStorage.setItem("theme", "dark");
});


$(document).ready(function(){
  $(window).scroll(function(){
  if(this.scrollY > 500){
    $('.scroll-up-btn').addClass("show");
}else{
    $('.scroll-up-btn').removeClass("show");
}
});
$('.scroll-up-btn').click(function(){
  $('html').animate({scrollTop: 0});
  // removing smooth scroll on slide-up button click
  $('html').css("scrollBehavior", "auto");
});
var typed = new Typed(".typing", {
  strings: ["Student in EI!", "Developer!", "Sportsman!"],
  typeSpeed: 100,
  backSpeed: 70,
  loop: true
});

})


const splash = document.querySelector('.splash');


document.addEventListener('DOMContentLoaded', (e) => {
  setTimeout(()=>{
    splash.classList.add('display-none');
  }, 2000);
  
})

$('a').click(function(){
  $('html, body').animate({
    scrollTop: $( $(this).attr('href') ).offset().top
  }, 500);
  return false;
});



// side nav

$(document).ready(function() {
  $(".nav_ico").click(function(){
    $(this).toggleClass("active");
		$(".side_nav,.nav-overlay").toggleClass("active");
		
		return false
	});
});

//english index.html -> switch to german

$(document).ready(function(){
  $(".lang-flag").click(function(){
    $(".language-dropdown").toggleClass("open");
  });
  $("ul.lang-list li").click(function(){
    $("ul.lang-list li").removeClass("selected");
    $(this).addClass("selected");
    if($(this).hasClass('lang-en')){
      $(".language-dropdown").find(".lang-flag").addClass("lang-en").removeClass("lang-de");
      $("#lang_selected").html("<p>EN</p>")
    }else if($(this).hasClass('lang-de')){
      $(".language-dropdown").find(".lang-flag").addClass("lang-de").removeClass("lang-en");
      $("#lang_selected").html("<p>DE</p>")
    }
    $(".language-dropdown").removeClass("open");
  });
})


// $(document).ready(function(){
  //   $(".lang-flag").click(function(){
    //     $(".language-dropdown").toggleClass("open");
    //   });
    //   $("ul.lang-list li").click(function(){
      //     $("ul.lang-list li").removeClass("selected");
      //     $(this).addClass("selected");
      //     if($(this).hasClass('lang-en')){
        //       $(".language-dropdown").find(".lang-flag").addClass("lang-en").removeClass("lang-es").removeClass("lang-pt");
        //       $("#lang_selected").html("<p>EN</p>")
        //     }else if($(this).hasClass('lang-pt')){
          //       $(".language-dropdown").find(".lang-flag").addClass("lang-pt").removeClass("lang-es").removeClass("lang-en");
          //     $("#lang_selected").html("<p>PT</p>")
          //     }else{
            //       $(".language-dropdown").find(".lang-flag").addClass("lang-es").removeClass("lang-en").removeClass("lang-pt");
            //       $("#lang_selected").html("<p>ES</p>")
            //     }
            //     $(".language-dropdown").removeClass("open");
            //   });
            // })

            
            var typed2 = new Typed(".typing2", {
              strings: ["Elektrotechnikstudent!", "Entwickler!", "Sportbegeisteter!"],
              typeSpeed: 100,
              backSpeed: 70,
              loop: true
            });