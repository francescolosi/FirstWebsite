function product(){
	
	var correct=0;
	var prod= document.getElementById("prodsearch").value
	var lowerprod= prod.toLowerCase();

	
	if (lowerprod== "gtx 970") {
		
		correct++;
		window.location.href = "#gtx970"
	}
	 else if (lowerprod=="r9 furyx"){
		 
		 correct++;
		 window.location.href="#r9furyx";
	 }
	 else if (lowerprod=="gtx 980ti"){
		 
		 correct++;
		 window.location.href="#gtx980ti";
	 }
	 else if (lowerprod=="gtx 1070"){
		 
		 correct++;
		 window.location.href="#gtx1070";
	 }
	 else if (lowerprod=="gtx 1080"){
		 
		 correct++;
		 window.location.href="#gtx1080";
	 }
	 else if (lowerprod=="titan x"){
		 
		 correct++;
		 window.location.href="#titanx";
	 }
	 else if (lowerprod=="amd rx480"){
		
		correct++;
		 window.location.href="#amdrx480";
	 }
	 else if (lowerprod=="r9 280"){
		 
		 correct++;
		 window.location.href="#r9280";
	 }
	 else if (lowerprod=="r7 370"){
		 
		 correct++;
		 window.location.href="#r7370";
	 }
	 else if (lowerprod=="gtx 950"){
		 
		 correct++;
		 window.location.href="#gtx950";
	 }
	 
	 else if (correct==0){
		 
		 alert( prod+" not found please try again")
	 }
}