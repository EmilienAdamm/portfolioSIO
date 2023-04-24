$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
            $('.secTitle').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
            $('.secTitle').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
})

var typed = new Typed(".typing", {
    strings: [" BTS SIO SLAM"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});


$( document ).ready(function() {
    $(".parcours-box").removeClass("parcours-active");
    
    
    $(".round1").on("click",function(){
       $(".tl-round").css("background-color","rgb(255, 0, 0)");
       $(".round1").css("background-color","red");
       $(".parcours-active").removeClass("parcours-active");
       $(".parc1").addClass("parcours-active");
       $(".timeline-indicator").css("width","0");
    })
    
    $(".round2").on("click",function(){
       $(".tl-round").css("background-color","rgb(255, 0, 0)");
       $(".round1").css("background-color","red");
       $(".round2").css("background-color","red");
       $(".parcours-active").removeClass("parcours-active");
       $(".parc2").addClass("parcours-active");
       $(".timeline-indicator").css("width","240");
    })
    
    $(".round3").on("click",function(){
       $(".tl-round").css("background-color","rgb(255, 0, 0)");
       $(".round1").css("background-color","red");
       $(".round2").css("background-color","red");
       $(".round3").css("background-color","red");
       $(".parcours-active").removeClass("parcours-active");
       $(".parc3").addClass("parcours-active");
       $(".timeline-indicator").css("width","480");
    })
    
    $(".round4").on("click",function(){
       $(".tl-round").css("background-color","rgb(255, 0, 0)");
       $(".round1").css("background-color","red");
       $(".round2").css("background-color","red");
       $(".round3").css("background-color","red");
       $(".round4").css("background-color","red");
       $(".parcours-active").removeClass("parcours-active");
       $(".parc4").addClass("parcours-active");
       $(".timeline-indicator").css("width","720");
    })
    
  });




// const zoneRapp = document.getElementById("RappStage").addEventListener('click', async (e) => {
//     window.location.href="Rapport_de_Stage"
// })

function rappStage() {
    window.location.href="Rapport_de_Stage"
}

function resAppli() {
    window.location.href="https://github.com/EmilienAdamm/resAppli"
}

function tpBlockchain() {
    window.location.href="https://github.com/EmilienAdamm/TPBlockchain"
}

function bash() {
    window.location.href="https://github.com/EmilienAdamm/savescripts"
}

function tableau() {
    window.location.href="tableau_synthese"
}

function cv() {
    window.location.href="CV_ADAM_Emilien.pdf"
}
