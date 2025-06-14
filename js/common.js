//Scroll nav position fixed
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 70) {
        $(".AppHeader").addClass("HeaderFixed");
    } else {
        $(".AppHeader").removeClass("HeaderFixed");
    }
});


//   Nav link active
$(".AppNavbar .navlinks").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
});


//Responsive nav

 $(".menuIcoin").click(function () {
        $(".AppNavbar").addClass("active");
        $(".overlay").addClass("active");
      });
      $(".AppNavbar .navlinks, .overlay").click(function () {
        $(".AppNavbar").removeClass("active");
        $(".overlay").removeClass("active");
      });

       $(document).ready(function () {
        $(".nav-item-2").click(function () {
          $(".collapse").removeClass("show");
        });
      });
//Read More

  $(".reamoredbtn").click(function () {
        $(".moretext").slideToggle("slow");
        if ($(this).text() == "Read More") $(this).text("Read Less");
        else $(this).text("Read More");
      });

//Section smoth
 $(".navlinks").on("click", function (e) {
        var target = this.hash,
          $target = $(target);
        if ($target.length) {
          var offset = $(window).width() <= 767 ? 150 : 90;

          $("html, body")
            .stop()
            .animate(
              {
                scrollTop: $target.offset().top - offset,
              },
              500,
              "swing",
              function () {
                window.location.hash = target;
              }
            );
        }
      });
      if ($(window).width() <= 767) {
        $(".gallery-container").remove();
      }


//
  //Slider samall
      (function () {
        if (window.matchMedia("(max-width: 725px)").matches) {
          Array.from(document.getElementsByClassName("d_sm_none")).forEach(
            function (item) {
              item.parentNode.removeChild(item);
            }
          );
        } else {
          Array.from(document.getElementsByClassName("d_sm_block")).forEach(
            function (item) {
              item.parentNode.removeChild(item);
            }
          );
        }
      })();