var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");







function inputLength() {
	return input.value.length;
}

function createListElement() {
	var btn = document.createElement("button");       
var tr = document.createElement("tr");       
var td = document.createElement("td");    
var td2 = document.createElement("td");    
var li = document.createElement("li");       
	li.appendChild(document.createTextNode(input.value));
var r = document.createTextNode("Erase");       
btn.appendChild(r);                                
document.querySelector("tbody").appendChild(tr); 
tr.appendChild(td); 
td.appendChild(li); 
tr.appendChild(td2); 
td2.appendChild(btn);
td2.classList.add("td-p"); 
btn.classList.add("erase"); 
btn.classList.add("btn") 
btn.classList.add("btn-danger") 
btn.addEventListener("click", function(){	var b = this;
	addListenerErase(b);
	}
	);

	input.value = "";
	li.addEventListener("click", addListenerCheck);
}
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
function addListenerCheck(i){


		console.log(this)
		this.classList.toggle("done");

	
		
	
	}
function addListenerErase(b){
	console.log("erasing");
	console.log(b.parentNode.parentNode);
	b.parentNode.parentNode.innerHTML='';
}



document.querySelectorAll("li").forEach(function(i,a){
	i.addEventListener("click", addListenerCheck);
	
});
document.querySelectorAll("button.erase").forEach(function(i,a){
	i.addEventListener("click", function(){
	var b = this;
	addListenerErase(b)
	}
	);
	
});



button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);