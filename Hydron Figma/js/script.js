$(document).ready(function () {

  $('.toggle_icon').click(function () { 
    $('#mySidenav').toggleClass("h-screen")
  });
  // function openNav() {
  //     $("#mySidenav").addClass("w-[250px]");
  // }
  
  $('.closebtn').click(function () { 
    $("#mySidenav").removeClass("h-screen");
  });
    
});

