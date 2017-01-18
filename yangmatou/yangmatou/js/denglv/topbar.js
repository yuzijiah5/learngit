$(function(){
	
	//console.log($("#quickLogin")[0]);
	$("#quickLogin")[0].onmouseover=function(){
		$("#quickLogin>.topDownName")[0].style.border="1px solid #666";
		$("#quickLogin>.topDownName")[0].style.borderBottom="none";
		//$("#quickLogin>.topDownName")[0].style.color="color";
		$("#quickLogin>.topDownName")[0].style.height="31px";
		$("#quickLogin>.downList")[0].style.display="block";
	}
	$("#quickLogin")[0].onmouseleave=function(){
		$("#quickLogin>.topDownName")[0].style.border="1px solid #fff";
		$("#quickLogin>.topDownName")[0].style.height="29px";
		$("#quickLogin>.downList")[0].style.display="none";
	}
	$("#myMaTou")[0].onmouseover=function(){
		$("#myMaTou>.topDownName")[0].style.border="1px solid #666";
		$("#myMaTou>.topDownName")[0].style.borderBottom="none";
		$("#myMaTou>.topDownName")[0].style.height="31px";
		$("#myMaTou>.downList")[0].style.display="block";
	}
	$("#myMaTou")[0].onmouseleave=function(){
		$("#myMaTou>.topDownName")[0].style.border="1px solid #fff";
		$("#myMaTou>.topDownName")[0].style.height="29px";
		$("#myMaTou>.downList")[0].style.display="none";
	}
	
	
	
});
