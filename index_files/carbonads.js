$(window).load(function(){
        var dynamicSpanEl = "<span id='cad-remove' class='cad-remove' data-content='Continue to demo' aria-label='Close ad'></span>"
        $("div#carbonads").append(dynamicSpanEl);
        $("#cad-remove").click(function() {
          $("div#carbonads").remove();
        });
      });