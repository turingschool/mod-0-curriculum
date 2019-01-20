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
