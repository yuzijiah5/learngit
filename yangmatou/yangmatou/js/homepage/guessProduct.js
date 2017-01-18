

function Gues(){
	var _self=this;
	this.guess=document.getElementById("guessproduct");
	this.more=document.getElementById("loadingMore");
	var n=0;
	var _s=10;
	var _o=_s+10;
	this.star=function(){
		ajax("post","js/homepage/guessProduct.json",true,null,function(data){
			var _data=JSON.parse(data);
			var _arr="";
			for(var k in _data){
				if(k<=_s){
					_arr+=_data[k];
				}
			}
			_self.guess.children[1].innerHTML=_arr;
			
			
			_self.more.onclick=function(e){
				e=e||window.event;
				n++;
				//alert(_data["20"]);
				for(var k in _data){
					if(_s<k && k<=_o){
						_arr+=_data[k];
					}
				}
				_s=_s+10;
				_o=_s+10;
				_self.guess.children[1].innerHTML=_arr;
				if(n>=2){
					_self.guess.removeChild(_self.more);
				}
			};
			
		});
	}
	
	
	
	
	
	
	
	
	
}
