$(document).ready(function () {
    var links = $('#navbar_ul_1 li').children();
    // console.log(links);
     $.each(links, function(key, value){
        if(value.href == document.URL){
          var $parent = $(this).parent();
          $parent.addClass('active');
          // console.log($parent);
        }
     });
    // $('nav li a').click(function(e) {
    //
    //     $('nav li.active').removeClass('active');
    //
    //     var $parent = $(this).parent();
    //     $parent.addClass('active');
    //     // e.preventDefault();
    // });
});
