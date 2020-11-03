$( window ).on( "load", function() {
  // The slider being synced must be initialized first
  $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 210,
    itemMargin: 5,
    asNavFor: '#slider'
  });
 
  $('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel"
  });
});

$(document).ready(function() {

	$("#owl-demo").owlCarousel({

      autoPlay: 3000, //Set AutoPlay to 3 seconds
      navigation: true,
      dots:false,
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
      itemsTablet: [768,2],
      itemsMobile: [479,1],
      responsiveClass:true,


    });

  $("#owl-demo2").owlCarousel({

      autoPlay: 3000, //Set AutoPlay to 3 seconds
      navigation: true,
      dots:false,
      items : 2,
      itemsDesktop : [1199,2],
      itemsDesktopSmall : [979,2],
      itemsTablet: [768,2],
      itemsMobile: [479,1],
      responsiveClass:true,


    });

  $("#brand_cars").owlCarousel({

      autoPlay: 3000, //Set AutoPlay to 3 seconds
      navigation: false,
      dots:false,
      items : 4,
      itemsDesktop : [1199,4],
      itemsDesktopSmall : [979,3]

    });

  $("#hot_deal").owlCarousel({

       autoPlay: 3000, //Set AutoPlay to 3 seconds
       navigation: true,
       dots:false,
       items : 4,
       itemsDesktop : [1199,3],
       itemsDesktopSmall : [979,3],
       itemsTablet: [768,2],
       itemsMobile: [479,1],
       responsiveClass:true,

     });

  $("#hot_deal2").owlCarousel({

      autoPlay: 3000, //Set AutoPlay to 3 seconds
      navigation: true,
      dots:false,
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
      itemsTablet: [768,2],
      itemsMobile: [479,1],
      responsiveClass:true,


    });


  $("#hot_deal3").owlCarousel({

       autoPlay: 3000, //Set AutoPlay to 3 seconds
       navigation: true,
       dots:false,
       items : 4,
       itemsDesktop : [1199,3],
       itemsDesktopSmall : [979,3],
       itemsTablet: [768,2],
       itemsMobile: [479,1],
       responsiveClass:true,


     });


  $("#hot_deal4").owlCarousel({

      autoPlay: 3000, //Set AutoPlay to 3 seconds
      navigation: true,
      dots:false,
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
      itemsTablet: [768,2],
      itemsMobile: [479,1],
      responsiveClass:true,


    });

  $("#top_selling_cars").owlCarousel({

      autoPlay: 3000, //Set AutoPlay to 3 seconds
      navigation: true,
      dots:false,
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
      itemsTablet: [768,2],
      itemsMobile: [479,1],
      responsiveClass:true,


    });


  $("#client_says").owlCarousel({

      autoPlay: 3000, //Set AutoPlay to 3 seconds
      navigation: true,
      dots:false,
      items : 2,
      itemsDesktop : [1199,2],
      itemsDesktopSmall : [979,1],
      itemsTablet: [768,1],
      itemsMobile: [479,1],
      responsiveClass:true,


    });


});


var slider = document.getElementById("myRange");
var output = document.getElementById("range_slider1");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

var slider = document.getElementById("myRange2");
var output = document.getElementById("range_slider2");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}



