// $(".accordion").click(function() {
//     $(this).toggleClass("active");
//     var panel = $(this).next();
//     if (panel.css("display") === "block") {
//       panel.css("display", "none");
//     } else {
//       panel.css("display", "block");
//     }
//   }); 

// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function () {
//         this.classList.toggle("active");
//         var panel = this.nextElementSibling;
//         if (panel.style.display === "block") {
//             panel.style.display = "none";
//         } else {
//             panel.style.display = "block";
//         }
//     });
// }

$('.accordion').click(function () {
    $(this).toggleClass('active');
    $(this).next('.panel').slideToggle();
})

// if($(this).next().css('display') === 'block'){
    //     $(this).next().css('display', 'none');
    // } else {
    //     $(this).next().css('display', 'block');
    // }

