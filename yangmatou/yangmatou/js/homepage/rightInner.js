function Right(){
	var _self=this;
	this.show=document.getElementById("show");
	this.pointer=document.getElementById("on");
	this.onTop=document.getElementById("onTop");
	this.top=document.documentElement.scrollTop||document.body.scrollTop;
	this.over=function(){
		console.log(this.pointer);
		this.pointer.onmouseover=function(e){
			e=e||window.event;
			_self.show.style.display="block";
		}
		this.pointer.onmouseleave=function(e){
			e=e||window.event;
			_self.show.style.display="none";
		}
	}
	
	this.on=function(){
		this.onTop.onclick=function(e){
			e=e||window.event;

			if(document.body.scrollTop){
			document.body.scrollTop=0
				
			}else{
				document.documentElement.scrollTop=0;
				
			}
			
			
		}
	}
	
	
	
	
}
