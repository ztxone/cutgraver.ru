$(document).ready(function ($) {
  $(".popup-open").click(function () {
    $(".parent").fadeIn()
    return false
  })

  $(".popup-close").click(function () {
    $(this).parents(".parent").fadeOut()
    return false
  })

  // $(document).keydown(function (e) {
  //   if (e.keyCode === 27) {
  //     e.stopPropagation()
  //     $(".parent").fadeOut()
  //   }
  // })

  // $(".parent").click(function (e) {
  //   if ($(e.target).closest(".popup").length == 0) {
  //     $(this).fadeOut()
  //   }
  // })
})
