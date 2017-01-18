function Bran(){
	var _self=this;
	this.brand=document.getElementById("brands")
	this.list=_self.brand.children;
	
	
	this.point=function(){
		
		for(var i=0;i<_self.list.length;i++){
			_self.list[i].onmouseover=function(e){
				e=e||window.event;
				this.children[0].style.display="block";
				this.children[1].style.display="block";
			}
			_self.list[i].onmouseleave=function(e){
				e=e||window.event;
				this.children[0].style.display="none";
				this.children[1].style.display="none";
			}
		}
	};
	
	this.ondown=function(){
		var m=0;
		for(var i=0;i<_self.list.length;i++){
			for(var n=0;n<_self.list[i].children[2].children.length;n++){
				this.list[i].children[2].children[n].style.display="none";
				this.list[i].children[2].children[0].style.display="block";
			}
			this.list[i].children[0].onclick=function(e){
				e=e||window.event;
				m--;
				var x=this.parentNode.children[2].children.length;
				if(m<0){
					m=x-1;
				}
				for(var c=0;c<x;c++){
					this.parentNode.children[2].children[c].style.display="none";
				}
				this.parentNode.children[2].children[m].style.display="block";
			}
			
			this.list[i].children[1].onclick=function(e){
				e=e||window.event;
				m++;
				var x=this.parentNode.children[2].children.length;
				if(m>x-1){
					m=0;
				}
				for(var c=0;c<x;c++){
					this.parentNode.children[2].children[c].style.display="none";
				}
				this.parentNode.children[2].children[m].style.display="block";
			}
		}
	}
	
	
	
	
}
