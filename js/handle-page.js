

$('#mymenu').on( 'click' , () => {
  var menu = $(this).next('ul');
  if (menu.hasClass('open')) {
    menu.removeClass('open');
  }
  else {
    menu.addClass('open');
  }
})

var myiframe = $('.center-pane')

function load_pag (src_pag) {

  myiframe.attr( 'src' , 'pages/' + src_pag )

}
