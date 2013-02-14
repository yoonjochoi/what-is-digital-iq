init = function(){
	var jarallax = new Jarallax();
	jarallax.addAnimation('#yoonjoIs', 
						   [{progress:'0%', top: '100%'},
						   {progress:'10%', top: '60%'},
						   {progress:'100%', top: '60%'}]);
	
	jarallax.addAnimation('#topBanner', 
						   [{progress:'0%', top: '100%'},
						   {progress:'20%', top: '100%'},
						   {progress:'40%', top: '0%'},
						   {progress:'100%', top: '0%'}]);
						   
	jarallax.addAnimation('#thumbnailsContainer', 
						   [{progress:'0%', top: '100%'},
						   {progress:'20%', top: '100%'},
						   {progress:'40%', top: '0%'},
						   {progress:'100%', top: '0%'}]);
	
	jarallax.addAnimation('#bottom', 
						   [{progress:'0%', top: '100%'},
						   {progress:'80%', top: '100%'},
						   {progress:'100%', top: '0%'}]);


}

