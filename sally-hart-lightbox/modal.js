$(".photos a").on("click", function () {
  const img_html = $(this).html()  
  $(".modal-content").html(img_html)                    
  $(".modal").fadeIn(500);
  return false;
});

$(".modal-close, .modal-background").on("click", function () {
  $(".modal").fadeOut(500);
  return false
});

