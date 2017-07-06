$( document ).ready(function() {

	var currenturl = window.location.href;


	console.log("current URL is: " + currenturl);

	var i = currenturl.indexOf("github.io");

	console.log(i);

	i=i+9;

	var u = currenturl.substring(i)

	console.log('c'+u);

	$('.greywhenhover').each(function(i, obj) {
	    if ($(this).attr('href').indexOf(u)!=-1){
			$(this).css('color','#FF7F50');
	    }
	});



	console.log("javascript done");
});

