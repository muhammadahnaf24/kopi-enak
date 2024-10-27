$(document).ready(function () {
    var currentSlide = 0;
    var totalSlides = $(".carousel-slide").length;

    function showSlide(index) {
        $(".carousel-slide").css("transform", "translateX(-" + index * 100 + "%)");
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    var interval = setInterval(nextSlide, 2000); 

    $(".carousel-container").hover(
        function () {
            clearInterval(interval);
        },
        function () {
            interval = setInterval(nextSlide, 2000);
        }
    );

});

