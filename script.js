/* selector string id then method then id email button then html method to change it */
$("#personal-reason").click(function () {
   $("#email-button").html("Email personal request");
});
$("#professional-reason").click(function () {
   $("#email-button").html("Email professional request");
});
/*select email body when keypress find button and remove disabled attribute    */
$("#email-body").keypress(function () {
   $("#email-button").removeAttr("disabled");
});
/*select id are you human and remove class is invalid so u can check box */
$("#are-you-human").click(function () {
   $("#are-you-human").removeClass("is-invalid");
});
/* select email button and action window open then give string mail to email link get val and append with + blank new window*/
$("#email-button").click(function () {
   window.open(
      "mailto:kaley@kaleykuhn.com?subject=Hello&body=" + $("#email-body").val(),
      "_blank"
   );
});

$(".title-1").click(function () {
   $(".text-1").toggle();
   $(".caret-right-1").toggle();
   $(".caret-bottom-1").toggle();
});
$(".title-2").click(function () {
   $(".text-2").toggle();
   $(".caret-right-2").toggle();
   $(".caret-bottom-2").toggle();
});
$(".title-3").click(function () {
   $(".text-3").toggle();
   $(".caret-right-3").toggle();
   $(".caret-bottom-3").toggle();
});
