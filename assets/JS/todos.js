//click on the li to strike through
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on the X to remove a todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(350, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which===13){
		//grabbing the text for new li
		var todotext = $(this).val();
		$(this).val("");
		//create a new li
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todotext + "</li>");
	}
});

$(".fa-edit").on("click", function(){
	$("input").fadeToggle();
});