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
    $('body').toggleClass('sidenav-closed');
  })

var basename = $('#side-menu').find('li.active span').text();
  $('#basename')
  .text(basename)
  .attr('href', '/${basename.toLowerCase()}.html'); //prideda atributa //title.hbs ziureti
})

$('#profile').on('click', function(){
   $('#sidenav-right').toggleClass('sidenav-right--open');
 })
