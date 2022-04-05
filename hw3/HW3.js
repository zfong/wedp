var CODE = "QWERTYUIOPASDFGHJKLZXCVBNM";
var codeArray = [];
var number = 0; 

//建立隨機字母 
function createCode(){
	//0-25
	var index = parseInt(Math.random()*26);
	return CODE.charAt(index);
};

//建立顯示label方法
function createLabel(code){
	/**
	 * <label class="label">
			A
		</label>
	 */
	var label = document.createElement("label");
	label.className = "label";
	label.style.left = "50px";
	label.innerHTML = code;
	label.code = code;
	
	var html = document.documentElement;
	
	//所有label標籤的Y座標
	var labelY = 100;
	label.style.top = labelY+"px";
	
	return label;
}

window.onload = function(){
	document.getElementById("startBtn").disabled = false;

	//註冊鍵盤事件
	document.documentElement.onkeydown=function(event){
		var keyCode = event.keyCode; //獲取按下的嗎
		var code = String.fromCharCode(keyCode);//A-Z
	    var i = 0;
			//label標籤
			var label = codeArray[i];
			if(label.code==code){
				clearInterval(label.interval_id);
				label.parentNode.removeChild(label);
				codeArray.splice(i,1);
	
		}
	};
};

//讓label標籤慢慢的從左向右移動
function runLabelTop(label){
	
	//獲取頁面的長度
	var Length = 500;
	
	label.interval_id = setInterval(function(){
		//50px
		var left = parseInt(label.style.left);
		left +=1;
		//判斷label是否已經超過頁面的高度
		if(left > Length-30){
			removeLabel(label,false);
		}else{
			label.style.left = left +"px";
		}
	},10);
}

//flag = false使用者沒有按下該字母
function removeLabel(label,flag){
	clearInterval(label.interval_id);
	label.parentNode.removeChild(label);
	codeArray.shift();
	
}

var game_id = null;

//開始遊戲
function startGame(startButton){
	
	startButton.disabled = true;
	
	game_id = setInterval(function(){
		//建立要顯示的字元
		var code =createCode();
		//建立一個label顯示字元
		var label = createLabel(code);
		
		//讓label標籤慢慢向下移動,修改標籤的style.top屬性
		runLabelTop(label);
		
		//把label標籤節加入到頁面中
		document.body.appendChild(label);
		codeArray.push(label);
	},200);
}

//停止遊戲
function stopGame(){
	clearInterval(game_id);
	for ( var i = 0; i < codeArray.length; i++) {
		clearInterval(codeArray[i].interval_id);
		codeArray[i].parentNode.removeChild(codeArray[i]);
	}
	codeArray = [];
	document.getElementById("startBtn").disabled = false;
}
