function Cou(){
	var _self=this;
	this.lively1=document.getElementById("lively1");
	this.star=function(){
		ajax("post","js/homepage/couReNao.json",true,null,function(data){
			var _data=JSON.parse(data);
			var _arr="";
			for(var k in _data){
				_arr+=_data[k]
			}
			_self.lively1.children[1].innerHTML=_arr;
		});
	}
}
