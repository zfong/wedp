var CODE = "QWERTYUIOPASDFGHJKLZXCVBNM";
var codeArray = [];
var number = 0; 

//建立隨機字母 
function createCode(){
	//0-25
	var index = parseInt(Math.random()*26);
	return CODE.charAt(index);
};

function createLabel0(code){
	var label = document.createElement("label");
	label.className = "label";
	label.style.left = "50px";
	label.innerHTML = code;
	label.code = code;
	var html = document.documentElement;
	//所有label標籤的Y座標
	var labelY0 = 100;
	label.style.top = labelY0+"px";
	return label;
}

function createLabel1(code){
	var label = document.createElement("label");
	label.className = "label";
	label.style.left = "50px";
	label.innerHTML = code;
	label.code = code;
	var html = document.documentElement;
	//所有label標籤的Y座標
	var labelY0 = 120;
	label.style.top = labelY0+"px";
	return label;
}

function createLabel2(code){

	var label = document.createElement("label");
	label.className = "label";
	label.style.left = "50px";
	label.innerHTML = code;
	label.code = code;
	var html = document.documentElement;
	//所有label標籤的Y座標
	var labelY0 = 140;
	label.style.top = labelY0+"px";
	return label;
}

function createLabel3(code){

	var label = document.createElement("label");
	label.className = "label";
	label.style.left = "50px";
	label.innerHTML = code;
	label.code = code;
	var html = document.documentElement;
	//所有label標籤的Y座標
	var labelY0 = 160;
	label.style.top = labelY0+"px";
	return label;
}

function createLabel4(code){

	var label = document.createElement("label");
	label.className = "label";
	label.style.left = "50px";
	label.innerHTML = code;
	label.code = code;
	var html = document.documentElement;
	//所有label標籤的Y座標
	var labelY0 = 180;
	label.style.top = labelY0+"px";
	return label;
}

function createLabel5(code){
	var label = document.createElement("label");
	label.className = "label";
	label.style.left = "50px";
	label.innerHTML = code;
	label.code = code;
	var html = document.documentElement;
	//所有label標籤的Y座標
	var labelY0 = 200;
	label.style.top = labelY0+"px";
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
	var Length = 1000;
	label.interval_id = setInterval(function(){
		//50px
		var left = parseInt(label.style.left);
		left +=1;
		//判斷label是否已經超過頁面的高度
		if(left > Length-30){
			removeLabel(label,false);
            stopGame();
		}else{
			label.style.left = left +"px";
		}
	},10);
}

//使用者沒有按下該字母
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
		var code0 =createCode();
        var code1 =createCode();
        var code2 =createCode();
        var code3 =createCode();
        var code4 =createCode();
        var code5 =createCode();

		//建立一個label顯示字元
		var label0 = createLabel0(code0);
        var label1 = createLabel1(code1);
        var label2 = createLabel2(code2);
        var label3 = createLabel3(code3);
        var label4 = createLabel4(code4);
        var label5 = createLabel5(code5);
		
		//讓label標籤慢慢向下移動,修改標籤的style.top屬性
		runLabelTop(label0);
        runLabelTop(label1);
        runLabelTop(label2);
        runLabelTop(label3);
        runLabelTop(label4);
        runLabelTop(label5);
		
		//把label標籤節加入到頁面中
		document.body.appendChild(label0);
        document.body.appendChild(label1);
        document.body.appendChild(label2);
        document.body.appendChild(label3);
        document.body.appendChild(label4);
        document.body.appendChild(label5);
		codeArray.push(label0);
        codeArray.push(label1);
        codeArray.push(label2);
        codeArray.push(label3);
        codeArray.push(label4);
        codeArray.push(label5);
	},1500);
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
