


function Nav(){
	var _self=this;
	this.navItemDnow=document.getElementById("nav-itemDnow");
	this.categoryMenu=document.getElementById("categoryMenu");
	this.categoryDownlist=document.getElementById("category-downlist");
	this.on=function(){
		this.navItemDnow.onmousemove=function(e){
			e=e||window.event;
			_self.categoryMenu.style.border="2px solid #cc3333";
			_self.categoryMenu.style.borderBottom="2px solid #fff";
			_self.categoryMenu.style.height="42px";
			_self.categoryMenu.getElementsByTagName("span")[0].style.background="url(img/banner2.png) no-repeat";
			_self.categoryDownlist.style.display="block";
		}
		this.navItemDnow.onmouseleave=function(e){
			e=e||window.event;
			_self.categoryMenu.style.border="none";
			_self.categoryMenu.style.height="44px";
			_self.categoryMenu.getElementsByTagName("span")[0].style.background="url(img/banner1.png) no-repeat";
			_self.categoryDownlist.style.display="none";
		}
	}

}


window.onload=function(){
	var _nav=new Nav();
	_nav.on();
	
	var _banner=new Banner();
	_banner.move();
	//_banner.on();
	
	var _lunbo=new Lun();
	_lunbo.on();
	_lunbo.star();
	
	var _brands=new Bran();
	_brands.point();
	_brands.ondown();
	
	
	var _cou=new Cou();
	_cou.star();
	
	var _guess=new Gues();
	_guess.star();
	
	var _right=new Right();
	_right.over();
	_right.on();
	
}
