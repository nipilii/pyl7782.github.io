$( document ).ready(function() {
    console.log( "wow!" );
    var flag=true;
	$('#mybutton').click(function(){
		if(flag){ // if value of flag is true
			$("#name").css('color','#007eab');
			flag=false;
		} else{
			$("#name").css('color','red');
			flag=true;
		}
	});

});

