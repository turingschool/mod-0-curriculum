$(document).ready(function(){
  $(".click-to-expand").siblings().hide()

  toggleMenuItems();
})

function toggleMenuItems() {
  $(".click-to-expand").on("click", function(e){
    e.preventDefault
    $(this).siblings().toggle()
  })
}

$('.toggle-show').on('click', function(){
  this.children[0].classList.toggle('hidden');
});

$('#fe-show').on('click', function(){
  document.querySelector('.fe-iteration').classList.toggle('hidden');
});

$('#be-show').on('click', function(){
  document.querySelector('.be-iteration').classList.toggle('hidden');
});


$('.iteration-toggle').on('click', function(){
  for(i = 0; i<2; i++){
    $('.iteration-toggle')[i].style.background = ''
  }
  if (this.id === 'fe-show') {
    $('.fe-iteration').removeClass('hidden');
    $('.be-iteration').addClass('hidden');
  } else if (this.id === 'be-show') {
    $('.be-iteration').removeClass('hidden');
    $('.fe-iteration').addClass('hidden');
  }
  this.style.background='#05c2d1';
});
