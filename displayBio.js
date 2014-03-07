// JavaScript Document

function display_bio(){
	var info = document.getElementById("info").innerHTML;
	
	if (info === 'div1'){
		document.getElementById("bio_name1").style.display="block";
	}else if (info === 'div2'){
		document.getElementById("bio_name2").style.display="block";
	}else if (info === 'div3'){
		document.getElementById("bio_name3").style.display="block";
	}
}

function hide_bio() {
		document.getElementById("bio_name1").style.display="block";
		document.getElementById("bio_name2").style.display="block";
		document.getElementById("bio_name3").style.display="block";

}