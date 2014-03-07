// JavaScript Document

function finish_swap(){
	
	var main1 = document.getElementById("main_div1").innerHTML;
	var main2 = document.getElementById("main_div2").innerHTML;
	var main3 = document.getElementById("main_div3").innerHTML;
	
	
	var spec1 = document.getElementById("spec_div1").innerHTML;
	var spec2 = document.getElementById("spec_div2").innerHTML;
	var spec3 = document.getElementById("spec_div3").innerHTML;

	
	var info = document.getElementById("info").innerHTML;
	
	//Displays main_div1_html
	if (info === 'div1') {
		document.getElementById("main_display").innerHTML=main1;
		}else if (info === 'div2') {
		document.getElementById("main_display").innerHTML=main2;
		}else if (info === 'div3') {
			document.getElementById("main_display").innerHTML=main3;
		}
}