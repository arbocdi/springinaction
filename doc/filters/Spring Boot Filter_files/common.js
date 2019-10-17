// start syntax highlighter
$(document).ready(function(){
  prettyPrint();
  $('#close').click(function(){
    $('#ques').hide();
  });
  //$('.pre').addClass('linenums');
   $('.leftSocialBlock').css('display','block');
   
   // top menu

 $( "#topDropMenu ul li" ).hover(
	 function(e) {
	   $('ul', $(this)).show();
	   $(this).css('background','#5382a1')
	   e.stopPropagation();
	 }, function() {
	  $('ul', $(this)).hide();
	  $(this).css('background','none')
	 }
	);
     $('#accordImg').click(function(){
      if($('.menuBox').is(':visible'))
	  {
	    $('.menuBox').hide();
	  }
	  else
	  {
	    $('.menuBox').show();
	  }
   });
	 
	 $("#accordion > li > div").click(function () {
           $('.active').not(this).removeClass('active').next().hide(300);
              
               $(this).toggleClass('active');
                if (false == $(this).next().is(':visible')) {
                  $('#accordion > ul').slideUp(300);
                }
                $(this).next().slideToggle(300);
              });
              
              var animationIsOff = $.fx.off;
              $.fx.off = true;
              //$('#accordion > li > div:eq()').click()
              $.fx.off = animationIsOff;
			  // mobile menu
 
});


//end of synatx highlighetr

 //google analytics 
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-37051123-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

  //end of google analytics