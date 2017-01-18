

function Lun(){
	this.list=document.getElementById("CarouselContent").children;
	var _arr=["windowLeft1","windowLeft2","windowMiddle1","windowMiddle2","windowMiddle3","windowRight2","windowRight1"];
	var _self=this;
	this.left=document.getElementById("switchDownLeft");
	this.right=document.getElementById("switchDownRight");
	this.timer=0;
	
	this.timeHours=document.getElementById("timeHours");
	this.timeMinutes=document.getElementById("timeMinutes");
	this.timeSeconds=document.getElementById("timeSeconds");
	
	
	this.on=function(){
		var n=0;
		this.left.onclick=function(){
			n--;
			if(n<0){
				n=_self.list.length-1;
			}
			for(var i=0;i<_arr.length;i++){
				_self.list[n].setAttribute("class",_arr[i]);
				n++;
				if(n>_self.list.length-1){
					n=0;
				}
			}
		};
		this.right.onclick=function(){
			n++;
			if(n>_self.list.length-1){
					n=0;
				}
			for(var i=0;i<_arr.length;i++){
				_self.list[n].setAttribute("class",_arr[i]);
				n++;
				if(n>_self.list.length-1){
					n=0;
				}
			}
		};
	};
	
	
	
	this.star=function(){
		window.clearTimeout(_self.timer);
		var o_date=new Date("2018/1/12");
		var s_date=new Date();
		var _milli=o_date.getTime()-s_date.getTime();
		var _date=new Date(_milli);
		
		var _hours=_date.getHours();
		var _minutes=_date.getMinutes();
		var _seconds=_date.getSeconds();
		if(_hours<10){
			_self.timeHours.innerHTML="0"+_hours;
		}else{
			_self.timeHours.innerHTML=_hours;
		}
		if(_minutes<10){
			_self.timeMinutes.innerHTML="0"+_minutes;
		}else{
			_self.timeMinutes.innerHTML=_minutes;
		}
		if(_seconds<10){
			_self.timeSeconds.innerHTML="0"+_seconds;
		}else{
			_self.timeSeconds.innerHTML=_seconds;
		}
		_self.timer=setTimeout(_self.star,10);
	};
	
}

