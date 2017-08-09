$( document ).ready(function() {

	console.log("wow");



	var currenturl = window.location.href;
	var a = "photos.html"
	var b = currenturl.indexOf(a)

	console.log(b)

	if(b!=-1){$("#gallery").unitegallery();}

	

	

	console.log("current URL is: " + currenturl);

	var i = currenturl.indexOf("github.io");

	console.log(i);

	i=i+9;
	var u = currenturl.substring(i)

	console.log('c'+u);

	$('.greywhenhover').each(function(i, obj) {
		console.log("check")
	    if ($(this).attr('href').indexOf(u)!=-1){
			$(this).css('color','#FF7F50');
	    }
	});

	function init() {
		console.log("hello")
	    window.addEventListener('scroll', function(e){
	        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
	            shrinkOn = 50,
	            header = document.querySelector("header");
	        if (distanceY > shrinkOn) {
	            classie.add(header,"smaller");
	        } else {
	            if (classie.has(header,"smaller")) {
	                classie.remove(header,"smaller");
	            }
	        }
	    });
	}
	init();
        
	console.log("javascript done");
});

