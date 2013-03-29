init = function(){

	window.scrollTo(100,500);
	
	var jarallax = new Jarallax();
	jarallax.setDefault('#intro-page', {display:'none'});
	
	jarallax.setDefault('#site,#site-main,#site-arrow-1,#site-arrow-2,#site-arrow-3', {display:'none'});	
	jarallax.setDefault('#digital-marketing,#digital-marketing-main,#digital-marketing-texture-1,#digital-marketing-texture-2', {display:'none'});
	jarallax.setDefault('#mobile,#mobile-main,#mobile-rings', {display:'none'});
	jarallax.setDefault('#social-media-main,#social-media-sub-1,#social-media-sub-2', {display:'none'});
	jarallax.setDefault('#BI-bg1, #BI-bg2, #BI-bg3, #BI-bg4, #BI1, #BI2, #BI3, #BI4', {display:'none'});

	jarallax.setDefault('#ranking-bg', {display:'none'});
	jarallax.setDefault('#wrap-reports,#span-Reports', {display:'none'});
	jarallax.setDefault('#R1,#R2,#R3,#R4,#R5', {display:'none'});
	
	jarallax.setDefault('#ranking-reportcover1-1,#ranking-reportcover1-2,#ranking-reportcover1-3,#ranking-reportcover1-4', {display:'none'});
	jarallax.setDefault('#ranking-reportcover2-1,#ranking-reportcover2-2,#ranking-reportcover2-3,#ranking-reportcover2-4', {display:'none'});
	jarallax.setDefault('#ranking-reportcover3-1,#ranking-reportcover3-2,#ranking-reportcover3-3', {display:'none'});
	jarallax.setDefault('#ranking-homepagelink', {display:'none'});
	
	
	jarallax.addAnimation('#l2-logo', 
						   [{progress:'0%', top: '30%', opacity: '1', paddingLeft: '84px'},
						   {progress:'10%', top: '10%', opacity: '1', paddingLeft: '84px'},
						   {progress:'15%', top: '5%', left: '10%', opacity: '1', paddingLeft: '0px'},
						   {progress:'75%', top: '5%', left: '10%', opacity: '1', paddingLeft: '0px'}]);
						   
	jarallax.addAnimation('h1', 
						   [{progress:'0%', top: '30%', opacity: '1', fontSize:'60px', paddingLeft: '270px'},
						   {progress:'10%', top: '10%', opacity: '1', fontSize:'60px', paddingLeft: '270px'},
						   {progress:'15%', top: '5%', opacity: '0.5', fontSize:'39px', paddingLeft: '332px'},
						   {progress:'75%', top: '5%', opacity: '0.5', fontSize:'39px', paddingLeft: '332px'}]);

	jarallax.addAnimation('#intro-page', 
						   [{progress:'0%', top: '100%', opacity: '0.5', display:'block'},
						   {progress:'5%', top: '100%', opacity: '0.5', display:'block'},
						   {progress:'10%', top: '25%', opacity: '1', display:'block'},
						   {progress:'20%', top: '20%', opacity: '0.5', display:'block'},
						   {progress:'75%', top: '20%', opacity: '0.5', display:'block'},
						   {progress:'100%', top: '20%', opacity: '0.5', display:'block'}]);
	
	jarallax.addAnimation('#elevator-statement', 
						   [{progress:'0%', top: '100%', fontSize:'24px', paddingLeft: '145px'},
						   {progress:'10%', top: '50%', opacity: '1', fontSize:'24px', paddingLeft: '145px'},
						   {progress:'15%', top: '50%', opacity: '1', fontSize:'15px', paddingLeft: '230px'},
						   {progress:'20%', top: '45%', opacity: '0.5', fontSize:'15px', paddingLeft: '230px'},
						   {progress:'75%', top: '45%', opacity: '0.5', fontSize:'15px', paddingLeft: '230px'}]);

	jarallax.addAnimation('#brands-are', 
						   [{progress:'0%', top: '100%', paddingLeft: '145px'},
						   {progress:'10%', top: '50%', opacity: '1', paddingLeft: '145px'},
						   {progress:'15%', top: '50%', opacity: '1', paddingLeft: '230px'},
						   {progress:'20%', top: '45%', opacity: '0.5', paddingLeft: '230px'},
						   {progress:'75%', top: '45%', opacity: '0.5', paddingLeft: '230px'}]);
						   
	jarallax.addAnimation('#intro-page-site', 
						   [{progress:'0%', top: '50%', opacity: '1', width:'100px', marginLeft:'20px'},
						   {progress:'10%', top: '50%', opacity: '1', width:'150px', marginLeft:'0px'},
						   {progress:'15%', top: '50%', opacity: '1', width:'150px', marginLeft:'0px'},
						   {progress:'20%', top: '45%', opacity: '0', width:'150px', marginLeft:'0px'},
						   {progress:'75%', top: '45%', opacity: '0', width:'150px', marginLeft:'0px'}]);
						   						   
	jarallax.addAnimation('#intro-page-digital-marketing', 
						   [{progress:'0%', top: '50%', opacity: '1', width:'100px', marginLeft:'20px'},
						   {progress:'10%', top: '50%', opacity: '1', width:'150px', marginLeft:'0px'},
						   {progress:'15%', top: '50%', opacity: '1', width:'150px', marginLeft:'0px'},
						   {progress:'20%', top: '45%', opacity: '0', width:'150px', marginLeft:'0px'},
						   {progress:'75%', top: '45%', opacity: '0', width:'150px', marginLeft:'0px'}]);

	jarallax.addAnimation('#intro-page-mobile', 
						   [{progress:'0%', top: '50%', opacity: '1', width:'100px', marginLeft:'20px'},
						   {progress:'10%', top: '50%', opacity: '1', width:'150px', marginLeft:'0px'},
						   {progress:'15%', top: '50%', opacity: '1', width:'150px', marginLeft:'0px'},
						   {progress:'20%', top: '45%', opacity: '0', width:'150px', marginLeft:'0px'},
						   {progress:'75%', top: '45%', opacity: '0', width:'150px', marginLeft:'0px'}]);

	jarallax.addAnimation('#intro-page-social-media', 
						   [{progress:'0%', top: '50%', opacity: '1', width:'100px', marginLeft:'20px'},
						   {progress:'10%', top: '50%', opacity: '1', width:'150px', marginLeft:'0px'},
						   {progress:'15%', top: '50%', opacity: '1', width:'150px', marginLeft:'0px'},
						   {progress:'20%', top: '45%', opacity: '0', width:'150px', marginLeft:'0px'},
						   {progress:'75%', top: '45%', opacity: '0', width:'150px', marginLeft:'0px'}]);
						   						   	
	jarallax.addAnimation('#intro-page-text', 
						   [{progress:'0%', top: '100%'},
						   {progress:'10%', top: '50%', opacity: '1'},
						   {progress:'15%', top: '50%', opacity: '1'},
						   {progress:'20%', top: '45%', opacity: '0'},
						   {progress:'75%', top: '45%', opacity: '0'}]);

//main site
	jarallax.addAnimation('#top-background', 
						   [{progress:'0%', top: '100%', opacity: '1'},
						   {progress:'30%', top: '100%', opacity: '1'},
						   {progress:'45%', top: '0%', opacity: '1'},
						   {progress:'55%', top: '0%', opacity: '1'},
						   {progress:'100%', top: '0%', opacity: '1'}]);

//SITE					   
	jarallax.addAnimation('#site', 
						   [{progress:'0%', top: '100%', opacity: '1', display:'block'},
						   {progress:'42%', top: '36%', opacity: '1', display:'block'},
						   {progress:'48%', top: '10%', opacity: '0', display:'block'},
						   {progress:'100%', top: '0%', opacity: '0'}]);


	jarallax.addAnimation('#site-main', 
						   [{progress:'0%', top: '100%', left: '-150%', display:'block', opacity: '1'},
						   {progress:'20%', top: '100%', left: '-150%', display:'block', opacity: '1'},
						   {progress:'28%', top: '46%', left: '61%', display:'block', opacity: '1'},
						   {progress:'41%', top: '46%', left: '61%', display:'block', opacity: '1'},
						   {progress:'48%', top: '100%', left: '-150%', display:'block', opacity: '0'},
						   {progress:'100%', top: '100%', left: '-150%', display:'block', opacity: '0'}]);
						     
	jarallax.addAnimation('#site-arrow-1', 
						   [{progress:'0%', top: '40%', left: '-150%'},
						   {progress:'21%', top: '40%', left: '-150%', display:'block', opacity: '1'},
						   {progress:'33%', top: '40%', left: '58%', display:'block', opacity: '1'},
						   {progress:'41%', top: '40%', left: '58%', display:'block', opacity: '1'},
						   {progress:'48%', top: '10%', left: '-150%', display:'block', opacity: '0'},
						   {progress:'100%', top: '10%', left: '-150%', display:'block', opacity: '0'}]);
						   
	jarallax.addAnimation('#site-arrow-2', 
						   [{progress:'0%', top: '0%', left: '-150%'},
						   {progress:'21%', top: '0%', left: '58%', display:'block'},
						   {progress:'36%', top: '44%', left: '56%', display:'block'},
						   {progress:'41%', top: '44%', left: '56%', display:'block'},
						   {progress:'48%', top: '0%', left: '58%', display:'block'},
						   {progress:'100%', top: '0%', left: '-150%', display:'block'}]);
						   
	jarallax.addAnimation('#site-arrow-3', 
						   [{progress:'0%', top: '43%', left: '150%'},
						   {progress:'21%', top: '43%', left: '150%', display:'block'},
						   {progress:'36%', top: '43%', left: '56%', display:'block'},
						   {progress:'41%', top: '43%', left: '56%', display:'block'},
						   {progress:'48%', top: '43%', left: '150%', display:'block'},
						   {progress:'100%', top: '43%', left: '150%', display:'block'}]);
						   
// DIGITAL MARKETING						   
	jarallax.addAnimation('#digitalMarketing', 
						   [{progress:'0%', top: '100%', opacity: '1', marginLeft:'453px'},
						   {progress:'50%', top: '100%', opacity: '1', marginLeft:'453px'},
						   {progress:'53%', top: '46%', opacity: '1', marginLeft:'453px', display:'block'},
						   {progress:'64%', top: '10%', opacity: '0', marginLeft:'453px', display:'block'},
						   {progress:'100%', top: '0%', opacity: '0', marginLeft:'453px'}]);
						   
	jarallax.addAnimation('#digital-marketing-main', 
						   [{progress:'0%', top: '0%', opacity: '0'},
						   {progress:'43%', top: '0%', marginLeft: '-2%', display:'block', opacity: '0'},
						   {progress:'51%', top: '40%', marginLeft: '-2%', display:'block', opacity: '1'},
						   {progress:'56%', top: '40%', marginLeft: '-2%', display:'block', opacity: '1'},
						   {progress:'61%', top: '0%', marginLeft: '-2%', display:'block', opacity: '0'},
						   {progress:'100%', top: '0%', marginLeft: '-2%', display:'block', opacity: '0'}]);
						   
	jarallax.addAnimation('#digital-marketing-texture-1', 
						   [{progress:'0%', top: '30%', marginLeft: '-150%', display:'block'},
						   {progress:'43%', top: '30%', marginLeft: '-150%', display:'block'},
						   {progress:'51%', top: '30%', marginLeft: '-6%', display:'block'},
						   {progress:'56%', top: '30%', marginLeft: '-6%', display:'block'},
						   {progress:'61%', top: '30%', marginLeft: '-150%', display:'block'},
						   {progress:'100%', top: '30%', marginLeft: '-150%', display:'block'}]);
	
	jarallax.addAnimation('#digital-marketing-texture-2', 
						   [{progress:'0%', top: '100%', marginLeft: '-6%', display:'block'},
						   {progress:'43%', top: '100%', marginLeft: '-6%', display:'block'},
						   {progress:'51%', top: '30%', marginLeft: '-6%', display:'block'},
						   {progress:'56%', top: '30%', marginLeft: '-6%', display:'block'},
						   {progress:'61%', top: '100%', marginLeft: '-6%', display:'block'},
						   {progress:'100%', top: '100%', marginLeft: '-6%', display:'block'}]);

						   
//MOBILE						   
	jarallax.addAnimation('#mobile', 
						   [{progress:'0%', top: '100%', opacity: '1'},
						   {progress:'61%', top: '100%', opacity: '1', display:'block'},
						   {progress:'64%', top: '50%', opacity: '1', display:'block'},
						   {progress:'67%', top: '48%', opacity: '1', display:'block'},
						   {progress:'74%', top: '10%', opacity: '0', display:'block'},
						   {progress:'100%', top: '0%', opacity: '0'}]);					   

	jarallax.addAnimation('#mobile-main', 
						   [{progress:'0%', top: '100%', marginLeft:'-150px', opacity: '0'},
						   {progress:'63%', top: '100%', marginLeft: '-150px', opacity: '1', display:'block'},
						   {progress:'66%', top: '45%', marginLeft:'653px', opacity: '1', display:'block'},
						   {progress:'69%', top: '33%', marginLeft:'653px', opacity: '1', display:'block'},
						   {progress:'76%', top: '10%', marginLeft:'653px', opacity: '0', display:'block'},
						   {progress:'100%', top: '0%', marginLeft: '-150', opacity: '0', display:'block'}]);
						   	
	jarallax.addAnimation('#mobile-rings', 
						   [{progress:'0%', top: '0%', opacity: '0'},
						   {progress:'57%', top: '0%', opacity: '1', display:'block'},
						   {progress:'59%', top: '10%', opacity: '1', display:'block'},
						   {progress:'74%', top: '50%', opacity: '0', display:'block'},
						   {progress:'100%', top: '100%', opacity: '0', display:'block'}]);	
					   

//SOCIAL MEDIA	
	jarallax.addAnimation('#socialMedia', 
						   [{progress:'0%', top: '100%', opacity: '1'},
						   {progress:'66%', top: '100%', opacity: '1'},
						   {progress:'81%', top: '39%', opacity: '1'},
						   {progress:'86%', top: '39%', opacity: '1'},
						   {progress:'100%', top: '39%', opacity: '1'}]);

	jarallax.addAnimation('#social-media-main', 
						   [{progress:'0%', top: '100%', opacity: '1', marginLeft:'96px'},
						   {progress:'66%', top: '100%', opacity: '1', marginLeft:'96px', display:'block'},
						   {progress:'83%', top: '38%', opacity: '1', marginLeft:'96px', display:'block'},
						   {progress:'84%', top: '38%', opacity: '1', marginLeft:'96px', display:'block'},
						   {progress:'100%', top: '38%', opacity: '1', marginLeft:'96px', display:'block'}]);						   

	jarallax.addAnimation('#social-media-sub-1', 
						   [{progress:'0%', top: '100%', opacity: '1'},
						   {progress:'66%', top: '100%', opacity: '1', display:'block'},
						   {progress:'81%', top: '36%', opacity: '1', display:'block'},
						   {progress:'88%', top: '36%', opacity: '1', display:'block'},
						   {progress:'100%', top: '36%', opacity: '1', display:'block'}]);

	jarallax.addAnimation('#social-media-sub-2', 
						   [{progress:'0%', top: '100%', opacity: '1', marginLeft:'43px'},
						   {progress:'66%', top: '100%', opacity: '1', marginLeft:'43px', display:'block'},
						   {progress:'81%', top: '59%', opacity: '1', marginLeft:'43px', display:'block'},
						   {progress:'88%', top: '59%', opacity: '1', marginLeft:'43px', display:'block'},
						   {progress:'100%', top: '59%', opacity: '1', marginLeft:'43px', display:'block'}]);




	jarallax.addAnimation('#wrap-bottom-icons', 
						   [{progress:'0%', top: '100%'},
						   {progress:'20%', top: '100%'},
						   {progress:'25%', top: '85%'},
						   
						   {progress:'100%', top: '85%'}]);	

	jarallax.addAnimation('#BI-bg1', 
						   [{progress:'0%', top: '100%', opacity: '0'},
						   {progress:'20%', top: '100%', opacity: '0'},
						   {progress:'25%', top: '85%', opacity: '0', display:'block'},
						   {progress:'42%', top: '85%', opacity: '1', display:'block'},
						   {progress:'46%', top: '85%', opacity: '1', display:'block'},
						   {progress:'49%', top: '85%', opacity: '0', display:'block'},
						   {progress:'100%', top: '85%', opacity: '0'}]);	

	jarallax.addAnimation('#BI-bg2', 
						   [{progress:'0%', top: '100%', opacity: '0'},
						   {progress:'20%', top: '100%', opacity: '0'},
						   {progress:'45%', top: '85%', opacity: '0', display:'block'},
						   {progress:'50%', top: '85%', opacity: '1', display:'block'},
						   {progress:'60%', top: '85%', opacity: '1', display:'block'},
						   {progress:'63%', top: '85%', opacity: '0', display:'block'},
						   {progress:'100%', top: '85%', opacity: '0'}]);	

	jarallax.addAnimation('#BI-bg3', 
						   [{progress:'0%', top: '100%', opacity: '0'},
						   {progress:'20%', top: '100%', opacity: '0'},
						   {progress:'57%', top: '85%', opacity: '0', display:'block'},
						   {progress:'63%', top: '85%', opacity: '1', display:'block'},
						   {progress:'70%', top: '85%', opacity: '1', display:'block'},
						   {progress:'72%', top: '85%', opacity: '0', display:'block'},
						   {progress:'100%', top: '85%', opacity: '0'}]);	

	jarallax.addAnimation('#BI-bg4', 
						   [{progress:'0%', top: '100%', opacity: '0'},
						   {progress:'20%', top: '100%', opacity: '0'},
						   {progress:'59%', top: '85%', opacity: '0'},
						   {progress:'66%', top: '85%', opacity: '0', display:'block'},
						   {progress:'70%', top: '85%', opacity: '1', display:'block'},
						   {progress:'86%', top: '85%', opacity: '1', display:'block'},
						   {progress:'88%', top: '85%', opacity: '0', display:'block'},
						   {progress:'100%', top: '85%', opacity: '0'}]);	

	jarallax.addAnimation('#BI1', 
						   [{progress:'0%', top: '85%', opacity: '0'},
						   {progress:'20%', top: '85%', opacity: '0.3', display:'block'},
						   {progress:'25%', top: '85%', opacity: '1', display:'block'},
						   {progress:'42%', top: '85%', opacity: '1', display:'block'},
						   {progress:'46%', top: '85%', opacity: '1', display:'block'},
						   {progress:'49%', top: '85%', opacity: '0.3', display:'block'},
						   {progress:'100%', top: '85%', opacity: '0.3'}]);	

	jarallax.addAnimation('#BI2', 
						   [{progress:'0%', top: '85%', opacity: '0'},
						   {progress:'20%', top: '85%', opacity: '0.3', display:'block'},
						   {progress:'45%', top: '85%', opacity: '1', display:'block'},
						   {progress:'50%', top: '85%', opacity: '1', display:'block'},
						   {progress:'60%', top: '85%', opacity: '1', display:'block'},
						   {progress:'63%', top: '85%', opacity: '0.3', display:'block'},
						   {progress:'100%', top: '85%', opacity: '0.3'}]);	

	jarallax.addAnimation('#BI3', 
						   [{progress:'0%', top: '85%', opacity: '0'},
						   {progress:'20%', top: '85%', opacity: '0.3', display:'block'},
						   {progress:'57%', top: '85%', opacity: '1', display:'block'},
						   {progress:'63%', top: '85%', opacity: '1', display:'block'},
						   {progress:'70%', top: '85%', opacity: '1', display:'block'},
						   {progress:'72%', top: '85%', opacity: '0.3', display:'block'},
						   {progress:'100%', top: '85%', opacity: '0.3'}]);	

	jarallax.addAnimation('#BI4', 
						   [{progress:'0%', top: '85%', opacity: '0'},
						   {progress:'20%', top: '85%', opacity: '0.3', display:'block'},
						   {progress:'59%', top: '85%', opacity: '0.3', display:'block'},
						   {progress:'66%', top: '85%', opacity: '1', display:'block'},
						   {progress:'70%', top: '85%', opacity: '1', display:'block'},
						   {progress:'86%', top: '85%', opacity: '1', display:'block'},
						   {progress:'88%', top: '85%', opacity: '0.3', display:'block'},
						   {progress:'100%', top: '85%', opacity: '0.3'}]);	

						   
	jarallax.addAnimation('#bottom-icon-site', 
						   [{progress:'0%', top: '100%'},
						   {progress:'30%', top: '100%'},
						   {progress:'45%', top: '85%'},
						   {progress:'100%', top: '85%'}]);
						   
	jarallax.addAnimation('#bottom-icon-digital-marketing', 
						   [{progress:'0%', top: '100%'},
						   {progress:'30%', top: '100%'},
						   {progress:'45%', top: '85%'},
						   {progress:'100%', top: '85%'}]);
						
	jarallax.addAnimation('#bottom-icon-Mobile', 
						   [{progress:'0%', top: '100%'},
						   {progress:'30%', top: '100%'},
						   {progress:'45%', top: '85%'},
						   {progress:'100%', top: '85%'}]);
						   
	jarallax.addAnimation('#bottom-icon-social-media', 
						   [{progress:'0%', top: '100%'},
						   {progress:'30%', top: '100%'},
						   {progress:'45%', top: '85%'},
						   {progress:'100%', top: '85%'}]);


	jarallax.addAnimation('#span-DigitalIQ', 
						   [{progress:'0%', top: '100%'},
						   {progress:'85%', top: '100%', display:'block'},
						   {progress:'89%', top: '0%', display:'block'},
						   {progress:'100%', top: '0%'}]);

	jarallax.addAnimation('#span-Ranking', 
						   [{progress:'0%', top: '100%', opacity: '0'},
						   {progress:'85%', top: '100%', display:'block', opacity: '1'},
						   {progress:'89%', top: '0%', display:'block', opacity: '1', marginTop:'56px'},
						   {progress:'100%', top: '0%', opacity: '0', marginTop:'56px'}]);
						   
	jarallax.addAnimation('#span-Reports', 
						   [{progress:'0%', top: '100%'},
						   {progress:'94%', top: '100%', marginTop:'56px', display:'block', opacity: '0'},
						   {progress:'98%', top: '0%', marginTop:'56px', display:'block', opacity: '1'},
						   {progress:'100%', top: '0%', marginTop:'56px', display:'block', opacity: '1'}]);

	jarallax.addAnimation('#ranking-bg', 
						   [{progress:'0%', top: '100%'},
						   {progress:'85%', top: '100%', display:'block'},
						   {progress:'89%', top: '0%', display:'block'},
						   {progress:'100%', top: '0%'}]);
					   
	jarallax.addAnimation('#R1', 
						   [{progress:'0%', top: '100%', opacity: '0'},
						   {progress:'85%', top: '100%', display:'block', opacity: '1'},
						   {progress:'89%', top: '25%', display:'block', opacity: '1'},
						   {progress:'91%', top: '25%', display:'block', opacity: '1'},
						   {progress:'100%', top: '0%', opacity: '0'}]);
						   
	jarallax.addAnimation('#R2', 
						   [{progress:'0%', top: '100%', opacity: '0'},
						   {progress:'85%', top: '100%', display:'block', opacity: '1'},
						   {progress:'89%', top: '35%', display:'block', opacity: '1'},
						   {progress:'91%', top: '29%', display:'block', opacity: '1'},
						   {progress:'100%', top: '0%', opacity: '0'}]);			
						   	
	jarallax.addAnimation('#R3', 
						   [{progress:'0%', top: '100%', opacity: '0'},
						   {progress:'85%', top: '100%', display:'block', opacity: '1'},
						   {progress:'89%', top: '45%', display:'block', opacity: '1'},
						   {progress:'91%', top: '33%', display:'block', opacity: '1'},
						   {progress:'100%', top: '0%', opacity: '0'}]);	
						   	
	jarallax.addAnimation('#R4', 
						   [{progress:'0%', top: '100%', opacity: '0'},
						   {progress:'85%', top: '100%', display:'block', opacity: '1'},
						   {progress:'89%', top: '55%', display:'block', opacity: '1'},
						   {progress:'91%', top: '37%', display:'block', opacity: '1'},
						   {progress:'100%', top: '0%', opacity: '0'}]);	
						   	
	jarallax.addAnimation('#R5', 
						   [{progress:'0%', top: '100%', opacity: '0'},
						   {progress:'85%', top: '100%', display:'block', opacity: '1'},
						   {progress:'89%', top: '65%', display:'block', opacity: '1'},
						   {progress:'91%', top: '41%', display:'block', opacity: '1'},
						   {progress:'100%', top: '0%', opacity: '0'}]);	

	jarallax.addAnimation('#reports, #wrap-reports', 
						   [{progress:'0%', top: '100%'},
						   {progress:'90%', top: '100%', display:'block'},
						   {progress:'100%', top: '20%', display:'block'}]);
						   
	jarallax.addAnimation('#ranking-reportcover1-1, #ranking-reportcover2-1, #ranking-reportcover3-1', 
						   [{progress:'0%', marginLeft: '-250%'},
						   {progress:'90%', marginLeft: '-250%', display:'block'},
						   {progress:'98%', marginLeft: '0%', display:'block'},
						   {progress:'100%', marginLeft: '0%', display:'block'}]);
						   
	jarallax.addAnimation('#ranking-reportcover1-2,#ranking-reportcover2-2, #ranking-reportcover3-2', 
						   [{progress:'0%', marginLeft: '-250%'},
						   {progress:'90%', marginLeft: '-250%', display:'block'},
						   {progress:'98%', marginLeft: '0%', display:'block'},
						   {progress:'100%', marginLeft: '0%', display:'block'}]);					   
						   
						   
	jarallax.addAnimation('#ranking-reportcover1-3, #ranking-reportcover2-3,#ranking-reportcover3-3', 
						   [{progress:'0%', marginLeft: '350%'},
						   {progress:'90%', marginLeft: '350%', display:'block'},
						   {progress:'98%', marginLeft: '0%', display:'block'},
						   {progress:'100%', marginLeft: '0%', display:'block'}]);
						   
	jarallax.addAnimation('#ranking-reportcover1-4,#ranking-reportcover2-4, #ranking-homepagelink', 
						   [{progress:'0%', marginLeft: '350%'},
						   {progress:'90%', marginLeft: '350%', display:'block'},
						   {progress:'98%', marginLeft: '0%', display:'block'},
						   {progress:'100%', marginLeft: '0%', display:'block'}]);
						   


}

