


function Banner(){
	
	this.banner1=document.getElementById("banner1");
	this.bannerLeft=document.getElementById("bannerLeft");
	this.bannerRight=document.getElementById("bannerRight");
	var _self=this;
	this.timer=0;
	this.opacity=0;
	this.left=0;
	this.right=0;
	var _flag=0;
	this.move=function(){
	
		window.clearTimeout(_self.timer);
		_self.opacity+=0.1;
		_self.bannerLeft.style.opacity=_self.opacity;
		_self.bannerLeft.style.filter="Alpha(opacity="+_self.opacity*100+")";
		_self.bannerLeft.style.left=_self.bannerLeft.offsetLeft+14+"px";
		_self.bannerRight.style.opacity=_self.opacity;
		_self.bannerRight.style.filter="Alpha(opacity="+_self.opacity*100+")";
		_self.bannerRight.style.left=_self.bannerRight.offsetLeft-6+"px";
		if(_self.bannerRight.style.opacity<1){
			_self.timer=window.setTimeout(_self.move,300);
		}
	}
		/*if(!_flag){
			_self.opacity+=0.1;
			_self.right=-6;
			_self.left=14;
			if(_self.opacity>=1){
				_flag=1;
				_self.opacity=1;
				
			}
		}else{
			_self.opacity-=0.1;
			_self.right=6;
			_self.left=-14;
			if(_self.opacity<=0){
				_flag=0;
				_self.opacity=0;
			}
		}
	
		_self.bannerLeft.style.opacity=_self.opacity;
		_self.bannerLeft.style.left=_self.bannerLeft.offsetLeft+_self.left+"px";
		_self.bannerRight.style.opacity=_self.opacity;
		_self.bannerRight.style.left=_self.bannerRight.offsetLeft+_self.right+"px";
		_self.timer=window.setTimeout(_self.move,200);
	}
	this.on=function(){
		_self.move();
		this.banner1.onmouseover=function(e){
			e=e||window.event;
			window.clearTimeout(_self.timer);
			_self.bannerLeft.style.opacity=1;
			_self.bannerLeft.style.left="290px";
			_self.bannerRight.style.opacity=1;
			_self.bannerRight.style.right="210px";
			
		}
		this.banner1.onmouseleave=function(e){
			e=e||window.event;
			_flag=1;
		_self.timer=window.setTimeout(_self.move,200);
			
		}
	}*/
}



