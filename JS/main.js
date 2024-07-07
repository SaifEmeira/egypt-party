

/**************START HOME**********************/ 
let navWidth=$(".navbar-left").outerWidth();
console.log(navWidth);
// $(".navbar-left").css("left")="-100px";

$(".openNav").click(function () {
    $(".navbar-left").animate({left:0},500);
    $(".home-text").animate({marginLeft:navWidth},600);
})

$(".closebtn").click(function () {
    console.log('close')
    $(".navbar-left").animate({left:-navWidth},500);
    $(".home-text").animate({marginLeft:0},600);
})

$(".navbar-left a").click(function(){
    
    var sectionPlace= $(this).attr("href");
    
    var goToSection = $(sectionPlace).offset().top;
    
    $("html , body").animate({scrollTop:goToSection},2000);
    
})
/**************END HOME**********************/ 


/**************START second section**********************/ 

$(".header").click(function () {
    $(".inner").not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
})
/**************END second section**********************/ 


/**************START THIRD section**********************/ 
let countDownDate= new Date("july 15,2024 23:59:59").getTime();

let counter = setInterval(()=>{

    let dateNow = new Date().getTime();

let dateDiff= countDownDate-dateNow;

let days = Math.floor(dateDiff /(1000 * 60 *60 * 24));
console.log(days);

let hours = Math.floor(dateDiff % (1000 * 60 *60 * 24) / (1000 * 60 * 60));
console.log(hours);
let minutes= Math.floor(dateDiff % (1000 * 60 *60 ) / (1000 * 60 ));
console.log(minutes);
let second= Math.floor(dateDiff % (1000 * 60 ) / (1000  ));
console.log(second);
$(".days").html(`${days} D`);
$(".hours").html(`${hours} H`);
$(".min").html(`${minutes} M`);
$(".sec").html(`${second} S`);



},1000);
/**************END THIRD section**********************/ 

/**************START FOURTH section**********************/ 
var maxLength = 100;
$('textarea').keyup(function() {
    console.log($(this).val().length)
  var charLength = $(this).val().length;
  var cahrLeft = maxLength-charLength;
  if(cahrLeft<=0)
            {
                 $(".textLimit").text("THERE IS NO ");
                
            }
        else{
        
        $(".textLimit").text(cahrLeft);
        }
});




/**************END FOURTH section**********************/ 

