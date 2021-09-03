var slider = document.getElementById("myRange");
var output = document.getElementById("age-number");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

var survey = document.getElementById('survey-questions')
    survey.scrollTop = survey.scrollHeight;
var typewriter = new Typewriter(survey, {
    loop: false, 
    delay: 15
});

typewriter.typeString("Before I get started, I’m gonna need to get a few pieces of information from you.")
.typeString("<br><br>").pauseFor(1000)
.typeString("It’s only 6 questions, I think you can make it.").pauseFor(500).typeString("<br><br>")
.typeString("<span class='yellow-dots'>. . . . . . . . .<span>").pauseFor(500).typeString("<br>")
.start();

$.fn.upform = function() {
    var $this = $(this);
    var container = $this.find(".upform-main");
  
    $(document).ready(function() {
      $(container).find(".input-block").first().click();
    });
  
    $($this).find("form").submit(function() {
      return false;
    });
  
    $(container)
      .find(".input-block")
      .not(".input-block input")
      .on("click", function() {
      rescroll(this);
    });
  
    $(container).find(".input-block input").keypress(function(e) {
      if (e.which == 13) {
        if ($(this).hasClass("required") && $(this).val() == "") {
        } else moveNext(this);
      }
    });
  
    $(container).find('.input-block input[type="radio"]').change(function(e) {
      moveNext(this);
    });
  
    $(window).on("scroll", function() {
      $(container).find(".input-block").each(function() {
        var etop = $(this).offset().top;
        var diff = etop - $(window).scrollTop();
  
        if (diff > 100 && diff < 300) {
          reinitState(this);
        }
      });
    });
  
    function reinitState(e) {
      $(container).find(".input-block").removeClass("active");
  
      $(container).find(".input-block input").each(function() {
        $(this).blur();
      });
      $(e).addClass("active");
      /*$(e).find('input').focus();*/
    }
  
    function rescroll(e) {
      $(window).scrollTo($(e), 200, {
        offset: { left: 100, top: -200 },
        queue: false
      });
    }
  
    function reinit(e) {
      reinitState(e);
      rescroll(e);
    }
  
    function moveNext(e) {
      $(e).parent().parent().next().click();
    }
  
    function movePrev(e) {
      $(e).parent().parent().prev().click();
    }
  };
  
  $(".upform").upform();
  $.fn.upform = function() {
    var $this = $(this);
    var container = $this.find(".upform-main");
  
    $(document).ready(function() {
      $(container).find(".input-block").first().click();
    });
  
    $($this).find("form").submit(function() {
      return false;
    });
  
    $(container)
      .find(".input-block")
      .not(".input-block input")
      .on("click", function() {
        rescroll(this);
      });
  
    $(container).find(".input-block input").keypress(function(e) {
      if (e.which == 13) {
        if ($(this).hasClass("required") && $(this).val() == "") {
        } else moveNext(this);
      }
    });
  
    $(container).find('.input-block input[type="radio"]').change(function(e) {
      moveNext(this);
    });
  
    $(window).on("scroll", function() {
      $(container).find(".input-block").each(function() {
        var etop = $(this).offset().top;
        var diff = etop - $(window).scrollTop();
  
        if (diff > 100 && diff < 300) {
          reinitState(this);
        }
      });
    });
  
    function reinitState(e) {
      $(container).find(".input-block").removeClass("active");
  
      $(container).find(".input-block input").each(function() {
        $(this).blur();
      });
      $(e).addClass("active");
      /*$(e).find('input').focus();*/
    }
  
    function rescroll(e) {
      $(window).scrollTo($(e), 200, {
        offset: { left: 100, top: -200 },
        queue: false
      });
    }
  
    function reinit(e) {
      reinitState(e);
      rescroll(e);
    }
  
    function moveNext(e) {
      $(e).parent().parent().next().click();
    }
  
    function movePrev(e) {
      $(e).parent().parent().prev().click();
    }
  };
  
  $(".upform").upform();
  