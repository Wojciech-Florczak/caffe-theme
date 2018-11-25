// Sticky Navbar
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        $("#navbar").addClass("animated slideInDown fixed-top");
        $("#navbar").css({
            "width": "80%",
            "border-left": "3px solid #CDD1CF",
            "border-right": "3px solid #CDD1CF"
        })
    } else {
        $("#navbar").removeClass("animated slideInDown fixed-top");
        $("#navbar").css({
            "width": "auto",
            "border-left": "none",
            "border-right": "none"
        })
    }
}
// Navbar items styling on hover
$(".nav-item").hover( function(){
   var current =  $(this).hasClass("current");
    if (current === false) {
        $(this).addClass("animated fadeIn active")
    }
    },
function(){
    $(this).removeClass("animated fadeIn active")
})

var path = (window.location.pathname);

// Accordion
// This code runs only on "Our Local" page
if(path.indexOf("our-local.html") >= 0 ){
    // Selectors - short
    var accord = $("#accordionExample button");
    var cardSel = $("#accordionExample .card");
    var spanSel = $("#accordionExample button span");

    accord.click(function(){
        // DOM elements
        let current = $(this);
        let span = $(this).children();
        let h5 = $(this).parent();
        let cardHeader = $(h5).parent();
        let card = $(cardHeader).parent();
        // Change styling of rest elements
        accord.not(current).css(
            "color", "black"
            );
        cardSel.not(card).css(
            "border-left", "none"
        );
        spanSel.not(span).css(
            "color", "lightgray"
        )
        $(spanSel).text("+")
        // Add styling when collapsing
        if($(this).hasClass("collapsed") === true){
            $(card).css({
                "border-left": "1px solid #947848"
            })
            $(this).css({
                "color": "#947848"
            })
            $(this).children().css({
                "color": "#947848"
            })
            $(span).text("-")
        }  else {
            $(card).css({
                "border-left": "none"
            })
            $(this).css({
                "color": "black"
            })
            $(this).children().css({
                "color": "lightgray"
            })
        }
    })
    }