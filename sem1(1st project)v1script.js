// variable for division
var plans = document.getElementById('plans');
var plan1 = document.getElementById('plan1');
var plan2 = document.getElementById('plan2');
var plan3 = document.getElementById('plan3');

// variable for buttons
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');

function click1(){
	plans.style.gridTemplateColumns= 'auto';
	plan1.style.display="grid";
	plan2.style.display="none";
	plan3.style.display="none";
	
	btn1.innerHTML="close";
	btn1.classList.add("clicked");
	btn1.onclick=closeDiv;
}
function click2(){
	plans.style.gridTemplateColumns= 'auto';
	plan1.style.display="none";
	plan2.style.display="grid";
	plan3.style.display="none";
	
	btn2.innerHTML="close";
	btn2.classList.add("clicked");
	btn2.onclick=closeDiv;
}
function click3(){
	plans.style.gridTemplateColumns= 'auto';
	plan1.style.display="none";
	plan2.style.display="none";
	plan3.style.display="grid";
	
	btn3.innerHTML="close";
	btn3.classList.add("clicked");
	btn3.onclick=closeDiv;
}

function closeDiv(){
	plans.style.gridTemplateColumns= '30% auto 30%';
	
	plan1.style.display="grid";
	plan2.style.display="grid";
	plan3.style.display="grid";
	
	btn1.innerHTML="Read More";
	btn2.innerHTML="Read More";
	btn3.innerHTML="Read More";
	
	btn3.classList.remove("clicked");
	btn2.classList.remove("clicked");
	btn1.classList.remove("clicked");
	
	btn3.onclick=click1;
	btn2.onclick=click2;
	btn1.onclick=click3;
}