// $(document).ready(function(){
//     $(".design-image") .click(function(){
//         $(".Design-para") .slideToggle();  
//         $(".Design-para") .slideUp(); 
//     })
    
// });

$(document).ready(function(){
    $(".design-image") .click(function(){
    $(".Design-para") .show();
    $(".design-image") .hide();
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

            $(document).ready(function(){
                $(".work1").hover(function(){
                $(".black").slideToggle("slow")
                })
            });