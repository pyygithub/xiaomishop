/*初始化函数*/
window.onload = function(){
	//为close绑定单击事件
	var closeObj = document.getElementById("close");
	var videoBoxObj = document.getElementById("video-box");
	var maskObj = document.getElementById("mask");
	var videoBoxTitleObj = document.getElementById("video-box-title");
	var videoBoxPlayerObj = document.getElementById("video-box-player");
	
	closeObj.onclick = function(){
		//隐藏video-box
		videoBoxObj.style.display = "none";
		//隐藏mask
		maskObj.style.display = "none";
		//停止播放
		videoBoxPlayerObj.pause();
	}
	
	var playerBtnObj = document.getElementById("player-btn");
	//为videoPlayer绑定单击
	var vBoxObj = document.getElementById("v-box");
	vBoxObj.onclick = function(){
		if(playerBtnObj.style.display == "none"){
			//停止播放
			videoBoxPlayerObj.pause();
			//显示播放按钮
			playerBtnObj.style.display = "block";
		}else{
			//隐藏播放按钮
			playerBtnObj.style.display = "none";
			//播放
			videoBoxPlayerObj.play();
		}
		
	}
	
	
	
	//为player单击
	var playerObjs = document.getElementsByClassName("player");
	for(var i=0; i<playerObjs.length; i++){
		playerObjs[i].onclick=function(){
			//弹出mask
			maskObj.style.display = "block";
			//弹出video-box：改变title 和 video src
			var title = this.getAttribute("title");
			var src = this.getAttribute("alt");
			
			//修改弹出video-box：改变title 和 video src
			videoBoxTitleObj.innserText = title;
			videoBoxPlayerObj.setAttribute("src",src);
			
			videoBoxObj.style.display = "block";
			
			//显示播放按钮
			playerBtnObj.style.display = "block";
			
		}
	}
	
	//购物车鼠标移入效果
	var cartBtnBoxObj = document.getElementById("cart-btn-box");
	var cartBtnObj =document.getElementById("cart-btn");
	var cartListObj = document.getElementsByClassName("cart-list")[0];
	cartBtnBoxObj.onmouseover = function(){
		cartBtnObj.style["background-color"] = "#fff";
		cartBtnObj.style.color="#ff6700";
		cartListObj.style.display="block";
	}
	cartBtnBoxObj.onmouseout = function(){
		cartBtnObj.style["background-color"] = "#ff6700";
		cartBtnObj.style.color="#fff";
		cartListObj.style.display="none";
	}
	
	
	
}
