var slideIndex = 1;
var slideIndex2 = 1;
var slideIndex3 = 1;
    showDivs1(slideIndex);
    showDivs2(slideIndex2);
    showDivs3(slideIndex3);
    
    function plusDivs1(n) {
      showDivs1(slideIndex += n);
    }

    function plusDivs2(n) {
      showDivs2(slideIndex2 += n);
    }

    function plusDivs3(n) {
      showDivs3(slideIndex3 += n);
    }
    
    function showDivs1(n) {
      var i;
      var x = document.getElementsByClassName("slide-box1");
      if (n > x.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = x.length} ;
      for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";  
      }
      x[slideIndex-1].style.display = "block";  
    }

    function showDivs2(n) {
      var i;
      var x = document.getElementsByClassName("slide-box2");
      if (n > x.length) {slideIndex2 = 1}    
      if (n < 1) {slideIndex2 = x.length} ;
      for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";  
      }
      x[slideIndex2-1].style.display = "block";  
    }

    function showDivs3(n) {
      var i;
      var x = document.getElementsByClassName("slide-box3");
      if (n > x.length) {slideIndex3 = 1}    
      if (n < 1) {slideIndex3 = x.length} ;
      for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";  
      }
      x[slideIndex3-1].style.display = "block";  
    }