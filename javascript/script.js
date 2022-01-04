// $(document).ready(function(){
//     $(".design-image") .click(function(){
//         $(".Design-para") .slideToggle();  
//         $(".Design-para") .slideUp(); 
//     })
    
// });

$(document).ready(function(){
    $(".design-image") .click(function(){
    $(".Design-para") .toggle();
    $(".design-image") .hide();
    })
    });  
    $(document).ready(function(){
      $(".Design-para") .click(function(){
      $(".Design-para") .toggle();
      $(".design-image") .show();
      })
      });    

    $(document).ready(function(){
        $(".dev-image") .click(function(){
        $(".dev-para") .show();
        $(".dev-image") .hide();
        })
        });  
        $(document).ready(function(){
            $(".pro-image") .click(function(){
            $(".product-para") .show();
            $(".pro-image") .hide();
            })
            });  

            // $(document).ready(function(){
            //     $(".work1").hover(function(){
            //     $(".black").slideToggle("slow")
            //     })
            // });

            $(document).ready(function(){
                $(".work1").mouseover(function(){
                  $(".black").show();
                }).mouseout(function(){
                  $(".black").hide();
                });
              });


              $('.card-1').mouseover(function(){
                $('.card-1').css({"font-size": "180%","opacity": "50%"});
                $("#card-text-1").show();
               
            }).mouseout(function(){
                $('.card-1').css("opacity","100%");
                $("#card-text-1").hide();
            });



            $('.card-2').mouseover(function(){
        $('#card-text-2').css({"background":"#3a3d4a"});
        $('.card-2').css({"font-size": "200%","opacity": "50%"});
        $("#card-text-2").show();
       
    }).mouseout(function(){
        $('.card-2').css("opacity","100%");
        $("#card-text-2").hide();
    });
    $('.card-3').mouseover(function(){
        $('.card-3').css({"font-size": "200%","opacity": "50%"});
        $("#card-text-3").show();
       
    }).mouseout(function(){
        $('.card-3').css("opacity","100%");
        $("#card-text-3").hide();
    });
    $('.card-4').mouseover(function(){
        $('.card-4').css({"font-size": "180%","opacity": "50%"});
        $("#card-text-4").show();
       
    }).mouseout(function(){
        $('.card-4').css("opacity","100%");
        $("#card-text-4").hide();
    });
    $('.card-5').mouseover(function(){
        $('#card-text-5').css({"background":"#fff", "color":"black"});
        $('.card-5').css({"font-size": "180%","opacity": "50%"});
        $("#card-text-5").show();
       
    }).mouseout(function(){
        $('.card-5').css("opacity","100%");
        $("#card-text-5").hide();
    });
    $('.card-6').mouseover(function(){
        $('#card-text-6').css({"background":"#fff", "color":"black"});
        $('.card-6').css({"font-size": "180%","opacity": "50%"});
        $("#card-text-6").show();
       
    }).mouseout(function(){
        $('.card-6').css("opacity","100%");
        $("#card-text-6").hide();
    });
    $('.card-7').mouseover(function(){
        $('.card-7').css({"font-size": "200%","opacity": "50%"});
        $("#card-text-7").show();
       
    }).mouseout(function(){
        $('.card-7').css("opacity","100%");
        $("#card-text-7").hide();
    });
    $('.card-8').mouseover(function(){
        $('.card-8').css({"font-size": "200%","opacity": "50%"});
        $("#card-text-8").show();
       
    }).mouseout(function(){
        $('.card-8').css({"opacity": "100%"});
        $("#card-text-8").hide();
    });