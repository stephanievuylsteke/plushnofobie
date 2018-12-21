$('.flip').hover(function(){
    $(this).find('.card').toggleClass('flipped');


    $(document).ready(function(e) {
        $(".showonhover").click(function(){
			$("#selectfile").trigger('click');
		});
    });
  });