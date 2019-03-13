// $(document).ready(function() {
//
// });

// $(function(){
//
//   function labas(){
//       console.log("hello jquery");
//   }
// })

// $(function(){
//   $('.boxes').on('click', function(){
//     // console.log('clicked');
//     // $(this).addClass('active');
//     $(this).slideDown();
//   })
// })

$(function(){
  $('#burger').on('click', function(){
    $('#side-menu').toggleClass('side-menu--closed');
    $('#section-container').toggleClass('section-container--closed');
  })
})
