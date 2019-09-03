$(document).ready(function(){
 var indicators = ["-","p","o","v","F","a"];

 indicators.forEach(function(indicator){
    $(".clickable"+indicator).click(function(){
        $(".showing"+indicator).slideToggle();
    });
  });

  $("form#query").submit(function(event){
      event.preventDefault();
      var contactEmail=$("#email").val();
      var query = $("#comments").val();

      $("#output").text("Your email is "+contactEmail+". Thank you for your input!")
  })
});

