function fizzbuzz(){
	
	var text = "";
	
	for(var i = 1; i <= 100; i++){
		
		if(i % 15 == 0){ // check 3 and 5 at the same time 3*5=15
			
			text += "FizzBuzz" + "<br>";
			
		}
		
		else if(i % 5 == 0){
				
			text += "Buzz" + "<br>";
			
		}
		
		else if(i % 3 == 0){
			
			text += "Fizz" + "<br>";
			
		}
		
		else{
			
			text += i + "<br>";
			
		}
	}
	
	document.getElementById("output").innerHTML = text;
		
}

function eratosthenes() {

	var x = 0;
	var primetext = "";
	var j;
	var isPrime;
	 
	for(var i = 2; i <= 100; i++) {
	 
		var j = 2;
		var isPrime = true;
	 
		while(j < i) {
	 
			if(i % j == 0) {
	 
				isPrime = false;
				break;
				
			}
			
			else{
	 
				j++;
	 
			}
	 
		}
	 
		if(isPrime) {
			primetext += i + " is prime" + "<br>";
			x++;
		}
	 
	}
	 
	primetext += "There are " + x + " prime numbers from 1 to 100.";
	
	document.getElementById("output").innerHTML = primetext;
	
}


var calc_html = "";
var calc_html2 = "";
var numbers_array = new Array();
var numbers_array2 = new Array();
var result = 0;
var result2;
var addition = false;
var subtraction = false;
var multiplication = false;
var division = false;
var hider = false;

function one(){numbers_array.push(1);}
function two(){numbers_array.push(2);}
function three(){numbers_array.push(3);}
function four(){numbers_array.push(4);}
function five(){numbers_array.push(5);}
function six(){numbers_array.push(6);}
function seven(){numbers_array.push(7);}
function eight(){numbers_array.push(8);}
function nine(){numbers_array.push(9);}
function zero(){numbers_array.push(0);}

function addi(){addition = true;}
function subt(){subtraction = true;}	
function mult(){multiplication = true;}	
function divi(){division = true;}

function one2(){
	
	numbers_array2.push('1');
	if(hider == false){
		document.getElementById("plus").style.display = "inline-block";
		document.getElementById("minus").style.display = "inline-block";
		document.getElementById("times").style.display = "inline-block";
		document.getElementById("divide").style.display = "inline-block";
	}
}
function two2(){
	
	numbers_array2.push('2');
	if(hider == false){
		document.getElementById("plus").style.display = "inline-block";
		document.getElementById("minus").style.display = "inline-block";
		document.getElementById("times").style.display = "inline-block";
		document.getElementById("divide").style.display = "inline-block";
	}
}
function three2(){
	
	numbers_array2.push('3');
	if(hider == false){
		document.getElementById("plus").style.display = "inline-block";
		document.getElementById("minus").style.display = "inline-block";
		document.getElementById("times").style.display = "inline-block";
		document.getElementById("divide").style.display = "inline-block";
	}
}
function four2(){numbers_array2.push('4');
	
	if(hider == false){
		document.getElementById("plus").style.display = "inline-block";
		document.getElementById("minus").style.display = "inline-block";
		document.getElementById("times").style.display = "inline-block";
		document.getElementById("divide").style.display = "inline-block";
	}
}
function five2(){numbers_array2.push('5');
	
	if(hider == false){
		document.getElementById("plus").style.display = "inline-block";
		document.getElementById("minus").style.display = "inline-block";
		document.getElementById("times").style.display = "inline-block";
		document.getElementById("divide").style.display = "inline-block";
	}
}
function six2(){numbers_array2.push('6');
	
	if(hider == false){
		document.getElementById("plus").style.display = "inline-block";
		document.getElementById("minus").style.display = "inline-block";
		document.getElementById("times").style.display = "inline-block";
		document.getElementById("divide").style.display = "inline-block";
	}
}
function seven2(){
	
	numbers_array2.push('7');
	if(hider == false){
		document.getElementById("plus").style.display = "inline-block";
		document.getElementById("minus").style.display = "inline-block";
		document.getElementById("times").style.display = "inline-block";
		document.getElementById("divide").style.display = "inline-block";
	}
}
function eight2(){
	
	numbers_array2.push('8');
	if(hider == false){
		document.getElementById("plus").style.display = "inline-block";
		document.getElementById("minus").style.display = "inline-block";
		document.getElementById("times").style.display = "inline-block";
		document.getElementById("divide").style.display = "inline-block";
	}
}
function nine2(){
	
	numbers_array2.push('9');
	if(hider == false){
		document.getElementById("plus").style.display = "inline-block";
		document.getElementById("minus").style.display = "inline-block";
		document.getElementById("times").style.display = "inline-block";
		document.getElementById("divide").style.display = "inline-block";
	}
}
function zero2(){
	
	numbers_array2.push('0');
	if(hider == false){
		document.getElementById("plus").style.display = "inline-block";
		document.getElementById("minus").style.display = "inline-block";
		document.getElementById("times").style.display = "inline-block";
		document.getElementById("divide").style.display = "inline-block";
	}
}

function addi2(){
	
	numbers_array2.push('+'); 
	document.getElementById("plus").style.display = "none";
	document.getElementById("minus").style.display = "none";
	document.getElementById("times").style.display = "none";
	document.getElementById("divide").style.display = "none";
	hider = true;
	
}
function subt2(){
	
	numbers_array2.push('-'); 
	document.getElementById("minus").style.display = "none";
	document.getElementById("plus").style.display = "none";
	document.getElementById("times").style.display = "none";
	document.getElementById("divide").style.display = "none";
	hider = true;
}
function mult2(){
	
	numbers_array2.push('*'); 
	document.getElementById("times").style.display = "none";
	document.getElementById("minus").style.display = "none";
	document.getElementById("plus").style.display = "none";
	document.getElementById("divide").style.display = "none";
	hider = true;
}
function divi2(){
	
	numbers_array2.push('/'); 
	document.getElementById("divide").style.display = "none";
	document.getElementById("minus").style.display = "none";
	document.getElementById("times").style.display = "none";
	document.getElementById("plus").style.display = "none";
	hider = true;
}

function equa2(){
	
	
	var first_numb = "";
	var sec_numb = "";
	var next_numb = false;
	var operate = '';
	var y = 0;
	var checker;
	var pluser = false;
	var minuser = false;
	var timeser = false;
	var divideser = false;
	
	calc_html2 = "";
	calc_html2 = numbers_array2;
	
	for(var p = 0; p < calc_html2.length; p++){
		
		if(calc_html2[p] == "+"){
			
			pluser = true;
			checker = p;
			break;
			
		}
		if(calc_html2[p] == "-"){
			
			minuser = true;
			checker = p;
			break;
			
		}
		if(calc_html2[p] == "*"){
			
			timeser = true;
			checker = p;
			break;
			
		}
		if(calc_html2[p] == "/"){
			
			divideser = true;
			checker = p;
			break;
			
		}
		
	}
	
	for(var i = 0; i < checker; i++){
		
		first_numb += calc_html2[i];
		
	}
	
	for(var x = p + 1; x < calc_html2.length; x++){
		
		sec_numb += calc_html2[x];
		
	}
	
	
	first_numb = parseInt(first_numb);
	sec_numb = parseInt(sec_numb);
	
	
	if(pluser){
		
		result2 = first_numb + sec_numb;
		operate = "+";
		
	}
	if(minuser){
		
		result2 = first_numb - sec_numb;
		operate = "-";
	}
	if(timeser){
		
		result2 = first_numb * sec_numb;
		operate = "*";
	}
	if(divideser){
		
		result2 = first_numb / sec_numb;
		operate = "/";
	}
	
	
	document.getElementById("results").innerHTML = first_numb + " " + operate + " " + sec_numb + " " + "= " + result2;
	
	
	numbers_array2.length = 0;
	
	
}
	
function equa(){
	
	calc_html = "";
	
	if(addition){	
			result = numbers_array[0] + numbers_array[1];
			calc_html += "<p>" + numbers_array[0] + " + " + numbers_array[1];
 			numbers_array.length = 0;
			/*numbers_array.push(result); */
			addition = false;
	}
	if(subtraction){		
			result = numbers_array[0] - numbers_array[1];
			calc_html += "<p>" + numbers_array[0] + " - " + numbers_array[1];
			numbers_array.length = 0;
			subtraction = false;
	}
	if(multiplication){		
			result = numbers_array[0] * numbers_array[1];
			calc_html += "<p>" + numbers_array[0] + " * " + numbers_array[1];
			numbers_array.length = 0;
			multiplication = false;
	}
	if(division){		
			result = numbers_array[0] / numbers_array[1];
			calc_html += "<p>" + numbers_array[0] + " ÷ " + numbers_array[1];
			numbers_array.length = 0;
			division = false;
	}
	
	
	
	calc_html += " = " + result + "</p>";
	document.getElementById("results").innerHTML = calc_html;
	
}

function html_calculator(){
	
	calc_html = "";
	
	calc_html += "<p> Wurst Calculator </p>";
	calc_html += "<button type=\"button\" onclick=\"addi()\"><span>+</span></button> ";
	calc_html += "<button type=\"button\" onclick=\"subt()\"<span>-</span></button> ";
	calc_html += "<button type=\"button\" onclick=\"mult()\"><span>x</span></button> ";
	calc_html += "<button type=\"button\" onclick=\"divi()\"><span>÷</span></button> ";
	calc_html += "<button type=\"button\" onclick=\"equa()\"><span>=</span></button> <br> ";
	calc_html += "<button type=\"button\" onclick=\"nine()\"><span>9</span></button> ";
	calc_html += "<button type=\"button\" onclick=\"eight()\"><span>8</span></button> ";
	calc_html += "<button type=\"button\" onclick=\"seven()\"><span>7</span></button>  <br> ";
	calc_html += "<button type=\"button\" onclick=\"six()\"><span>6</span></button> ";
	calc_html += "<button type=\"button\" onclick=\"five()\"><span>5</span></button> ";
	calc_html += "<button type=\"button\" onclick=\"four()\"><span>4</span></button>  <br> ";
	calc_html += "<button type=\"button\" onclick=\"three()\"><span>3</span></button> ";
	calc_html += "<button type=\"button\" onclick=\"two()\"><span>2</span></button> ";
	calc_html += "<button type=\"button\" onclick=\"one()\"><span>1</span></button> ";
	calc_html += "<button type=\"button\" onclick=\"zero()\"><span>0</span></button> ";
	calc_html += "<button type=\"button\" onclick=\"cleararray()\"><span>C</span></button>  <br> ";
	
	calc_html += "<p id=\"results\"></p>";
	document.getElementById("output").innerHTML = calc_html;
	
	
}

function cleararray(){
	
	numbers_array.length = 0;
    result = 0;
	calc_html = "";
	document.getElementById("results").innerHTML = calc_html;
	
}

function cleararray2(){
	
	numbers_array2.length = 0;
    result2 = 0;
	calc_html2 = "";
	document.getElementById("plus").style.display = "inline-block";
	document.getElementById("minus").style.display = "inline-block";
	document.getElementById("times").style.display = "inline-block";
	document.getElementById("divide").style.display = "inline-block";
	document.getElementById("results").innerHTML = calc_html2;
	
}

function equa2_clear(){
	
	numbers_array2.length = 0;
    result2 = 0;
	calc_html2 = "";
	document.getElementById("plus").style.display = "inline-block";
	document.getElementById("minus").style.display = "inline-block";
	document.getElementById("times").style.display = "inline-block";
	document.getElementById("divide").style.display = "inline-block";
	
	
}

function better_calc(){
	
	calc_html2 = "";
	calc_html2 += "<p> Better Calculator </p>";
	calc_html2 += "<button id=\"plus\" type=\"button\" onclick=\"addi2()\"><span>+</span></button> ";
	calc_html2 += "<button id=\"minus\" type=\"button\" onclick=\"subt2()\"<span>-</span></button> ";
	calc_html2 += "<button id=\"times\" type=\"button\" onclick=\"mult2()\"><span>x</span></button> ";
	calc_html2 += "<button id=\"divide\" type=\"button\" onclick=\"divi2()\"><span>÷</span></button> ";
	calc_html2 += "<button type=\"button\" onclick=\"equa2()\"><span>=</span></button> <br> ";
	calc_html2 += "<button type=\"button\" onclick=\"nine2()\"><span>9</span></button> ";
	calc_html2 += "<button type=\"button\" onclick=\"eight2()\"><span>8</span></button> ";
	calc_html2 += "<button type=\"button\" onclick=\"seven2()\"><span>7</span></button>  <br> ";
	calc_html2 += "<button type=\"button\" onclick=\"six2()\"><span>6</span></button> ";
	calc_html2 += "<button type=\"button\" onclick=\"five2()\"><span>5</span></button> ";
	calc_html2 += "<button type=\"button\" onclick=\"four2()\"><span>4</span></button>  <br> ";
	calc_html2 += "<button type=\"button\" onclick=\"three2()\"><span>3</span></button> ";
	calc_html2 += "<button type=\"button\" onclick=\"two2()\"><span>2</span></button> ";
	calc_html2 += "<button type=\"button\" onclick=\"one2()\"><span>1</span></button> ";
	calc_html2 += "<button type=\"button\" onclick=\"zero2()\"><span>0</span></button> ";
	calc_html2 += "<button type=\"button\" onclick=\"cleararray2()\"><span>C</span></button>  <br> ";
	
	calc_html2 += "<p id=\"results\"></p>";
	document.getElementById("output").innerHTML = calc_html2;
	
}

function reset_text(){
	
	calc_html = "";
	numbers_array.length = 0;
    result = "";
	document.getElementById("output").innerHTML = "This text will change to output.";
	
}

/* function parsetester(){
	
	alert(parseInt("57")+parseInt("32"));
	
} */
	
function removeSpecials(str) {
	
    var lower = str.toLowerCase();      //for 1st way no #s
    var upper = str.toUpperCase();      ////for 1st way no #s
	//var regexp = /[0-9]/;
	

    var res = "";
	
      /*for(var i = 0; i < lower.length; i++) {                 //works with most languages but no numbers
        if(lower[i] != upper[i]) // || lower[i].trim() === ''
            res += str[i];
    } */
	
	res = str.replace(/[^a-zA-Z0-9]/g, '');      //regex works only with english but also numbers
	
    return res;
	
}

function palindrome_logic(cleanWordString){
	
	var forward = cleanWordString;
	var back = "";
	var isPalindrome;
	
	for(var i = cleanWordString.length - 1; i >= 0; i--){	
		back += cleanWordString[i];	
	}
	
	if(forward === back){
		isPalindrome = true;
	}
	else{
		isPalindrome = false;
	}
	
	return isPalindrome;
	
}

function alerter(){
	
	var wordstr = document.getElementById("textholder").value;
	
	wordstr = removeSpecials(wordstr);
	
	wordstr = wordstr.toLowerCase();
	
	//alert("Textbox Text is: " + wordstr);

	alert("Is it a Palindrome?: " + palindrome_logic(wordstr));
}
	
function palindromer(){
	
	var html_output = "";
	
	html_output += "<input id=\"textholder\" size=\"50\" value=\"A man, a plan, a canal – Panama\"> <br>";
	
	html_output += "<button type=\"button\" onclick=\"alerter()\"><span>Submit</span></button>";
	
	
	document.getElementById("output").innerHTML = html_output;
	
	
}

function cashRegisterOutput(){
	
	var html_output = "";
	
	html_output += "<p>Cash Register</p>"
	html_output += "<input type=\"number\" pattern=\"[0-9]\" id=\"textholder1\" size=\"50\" placeholder=\"price input\" value=\"\"> <br>";
	html_output += "<input type=\"number\" pattern=\"[0-9]\" id=\"textholder2\" size=\"50\" placeholder=\"cash input\" value=\"\"> <br>";
	html_output += "<button type=\"button\" onclick=\"doTransaction()\"><span>Submit</span></button>";
	html_output += "<p id=\"output2\">this is the register's output: </p>";
	
	//document.getElementById("output2").innerHTML = html_output;
	
	document.getElementById("output").innerHTML = html_output;
	
	
}

function checkCashRegister(price, cash, cid){
	
	var change;
	
	change = cash - price;
	
	if(figure_cid(cid) < change){
		//alert("1: " + change);
		change = {status: "INSUFFICIENT_FUNDS", change: []}; 
		//alert("2: " + change.status);
		return change;
	}
	if(figure_cid(cid) == change){
		//alert(change);
		change = {status: "CLOSED", change: cid};
		//alert(change);
		return change;
	} 
	else{
		//alert("its else dawg");
		return figure_change(change,cid);
	}
	
}

function figure_cid(cid){
	
	var total = 0;
	
	for(var i = 0; i < cid.length; i++){
		total += cid[i][1];
	}
	//alert("total nontrunc: " + total + " totaltrunc: " + +total.toFixed(2));
	return +total.toFixed(2);
	
}

function figure_change(change, cid){
	
	var hundos;
	var twenties;
	var tens;
	var fives;
	var ones;
	var quarters;
	var dimes;
	var nickels;
	var pennies;
	var change_obj = {
		status: "OPEN",
		change: cid
	};  
	var final_obj = {
		status: "OPEN",
		change: []
	};
	
	/*
	[
					["PENNY", 1.01], 
					["NICKEL", 2.05], 
					["DIME", 3.1], 
					["QUARTER", 4.25], 
					["ONE", 90], 
					["FIVE", 55], 
					["TEN", 20], 
					["TWENTY", 40], 
					["ONE HUNDRED", 100]
				]
	*/
	
	//["QUARTER", 0.5]

	
	//alert("price: 0, " + "cash: 35.39, " + "change: 35.39");
	
	if(change > 100 || change == 100){
		var hundos_needed = 0;
		hundos_needed = Math.floor(change / 100);
		//alert("hundos_needed: " + hundos_needed);
		hundos = (cid[8][1] / 100);
		
		if(hundos_needed < hundos){
			change -= hundos_needed * 100;
			change_obj.change[8][1] = hundos_needed * 100;
			final_obj.change.push(["ONE HUNDRED", hundos_needed * 100]);
			
			
		}
		else{
			change -= hundos * 100;
			change_obj.change[8][1] = hundos * 100;
			final_obj.change.push(["ONE HUNDRED", hundos * 100]);
		}
		
		
		//alert("hundos: " + hundos);
		//alert("change: " + change);
	}
	if(change > 20 || change == 20){
		var twenties_needed = 0;
		twenties_needed = Math.floor(change / 20);
		//alert("twenties_needed: " + twenties_needed);
		twenties = (cid[7][1] / 20);
		
		if(twenties_needed < twenties){
			change -= twenties_needed * 20;
			change_obj.change[7][1] = twenties_needed * 20;
			final_obj.change.push(["TWENTY", twenties_needed * 20]);
			
		}
		else{
			change -= twenties * 20;
			change_obj.change[7][1] = twenties * 20;
			final_obj.change.push(["TWENTY", twenties * 20]);
		}
		
		
		//alert("twenties: " + twenties);
		//alert("change: " + change);
	}
  	if(change > 10 || change == 10){
		var tens_needed = 0;
		tens_needed = Math.floor(change / 10);
		//alert("tens_needed: " + tens_needed);
		tens = (cid[6][1] / 10);
		
		if(tens_needed < tens){
			change -= tens_needed * 10;
			change_obj.change[6][1] = tens_needed * 10;
			final_obj.change.push(["TEN", tens_needed * 10]);
		}
		else{
			change -= tens * 10;
			change_obj.change[6][1] = tens * 10;
			final_obj.change.push(["TEN", tens * 10]);
		}
		
		
		//alert("tens: " + tens);
		//alert("change: " + change);
	}
	 if(change > 5  || change == 5){
		var fives_needed = 0;
		fives_needed = Math.floor(change / 5);
		//alert("fives_needed: " + fives_needed);
		fives = (cid[5][1] / 5);
		
		if(fives_needed < fives){
			change -= fives_needed * 5;
			change_obj.change[5][1] = fives_needed * 5;
			final_obj.change.push(["FIVE", fives_needed * 5]);
			
		}
		else{
			change -= fives * 5;
			change_obj.change[5][1] = fives * 5;
			final_obj.change.push(["FIVE", fives * 5]);
		}
		
		
		//alert("fives: " + fives);
		//alert("change: " + change);
	} 
	if(change > 1  || change == 1){
		var ones_needed = 0;
		ones_needed = Math.floor(change / 1);
		//alert("ones_needed: " + ones_needed);
		ones = (cid[4][1] / 1);
		
		if(ones_needed < ones){
			change -= ones_needed * 1;
			change_obj.change[4][1] = ones_needed * 1;
			final_obj.change.push(["ONE", ones_needed * 1]);
			
		}
		else{
			change -= ones * 1;
			change_obj.change[4][1] = ones * 1;
			final_obj.change.push(["ONE", ones * 1]);
		}
		
		
		//alert("ones: " + ones);
		//alert("change: " + change);
	}
	if(change > .25 || change == .25){
		var quarters_needed = 0;
		quarters_needed = Math.floor(change / .25);
		//alert("quarters_needed: " + quarters_needed);
		quarters = (cid[3][1] / .25);
		
		if(quarters_needed < quarters){
			change -= quarters_needed * .25;
			change_obj.change[3][1] = quarters_needed * .25;
			final_obj.change.push(["QUARTER", quarters_needed * .25]);
		}
		else{
			change -= quarters * .25;
			change_obj.change[3][1] = quarters * .25;
			final_obj.change.push(["QUARTER", quarters * .25]);
		}
		
		
		//alert("quarters: " + quarters);
		//alert("change: " + change);
	}
 	if(change > .10 || change == .10){
		var dimes_needed = 0;
		dimes_needed = Math.floor(change / .10);
		//alert("dimes_needed: " + dimes_needed);
		dimes = (cid[2][1] / .10);
		
		if(dimes_needed < dimes){
			change -= dimes_needed * .10;
			change_obj.change[2][1] = dimes_needed * .10;
			final_obj.change.push(["DIME", dimes_needed * .10]);
			
		}
		else{
			change -= dimes * .10;
			change_obj.change[2][1] = dimes * .10;
			final_obj.change.push(["DIME", dimes * .10]);
		}
		
		
		//alert("dimes: " + dimes);
		//alert("change: " + change);
	} 
 	if(change > .05  || change == .05){
		var nickels_needed = 0;
		nickels_needed = Math.floor(change / .05);
		//alert("nickels_needed: " + nickels_needed);
		nickels = (cid[1][1] / .05);
		
		if(nickels_needed < nickels){
			change -= nickels_needed * .05;
			change_obj.change[1][1] = nickels_needed * .05;
			final_obj.change.push(["NICKEL", nickels_needed * .05]);
			
		}
		else{
			change -= nickels * .05;
			change_obj.change[1][1] = nickels * .05;
			final_obj.change.push(["NICKEL", nickels * .05]);
		}
		
		
		//alert("nickels: " + nickels);
		//alert("nickelbeforepennychange: " + change);
		
	} 
	if(change > .01  || change == .01){
		var pennies_needed = 0;
		change = +change.toFixed(2);
		pennies_needed = Math.floor(change / .01);
		//alert("pennies_needed: " + pennies_needed);
		pennies = (cid[0][1] / .01);
		
		if(pennies_needed < pennies){
			change -= pennies_needed * .01;
			change_obj.change[0][1] = pennies_needed * .01;
			final_obj.change.push(["PENNY", pennies_needed * .01]);
			
			/* alert("change: " + change + " " + "pennies_needed: " + " " + pennies_needed + "\n" + 
					"pennies: " + " " + pennies); */
			
			/* if(change_obj.change[0][1] == 0){
				
			} */
			
		}
		else{
			change -= pennies * .01;
			change_obj.change[0][1] = pennies * .01;
			final_obj.change.push(["PENNY", pennies * .01]);
		}
		
		
		//alert("pennies: " + pennies);
		//alert("change: " + change);
	} 	
	
/* 	for( var x = 0; x < final_obj.change.length; x++){
		alert(final_obj.change[x][1]);
		alert(final_obj.change[0][x]);
	} */
	
 	/*alert(final_obj.change[0][0] + " " + final_obj.change[0][1]);
	alert(final_obj.change[1][0] + " " + final_obj.change[1][1]);
	alert(final_obj.change[2][0] + " " + final_obj.change[2][1]);
	alert(final_obj.change[3][0] + " " + final_obj.change[3][1]);
	alert("change: " + change);
 	alert(final_obj.change[4][0] + " " + final_obj.change[4][1]);
	alert(final_obj.change[5][0] + " " + final_obj.change[5][1]);
	alert(final_obj.change[6][0] + " " + final_obj.change[6][1]); */
	 
	if(change > 0.01){
		//alert("change2: " + change);
		final_obj = {status: "INSUFFICIENT_FUNDS", change: []};
		//alert("derp");
	}
		
	
	return final_obj;
}


function doTransaction(){
	
 	var price = parseFloat(document.getElementById("textholder1").value);
	var cash = parseFloat(document.getElementById("textholder2").value);
	
	var your_change = cash - price;
	
	//var html_outputter = "";
	//alert("price: " + price + " " + "cash: " + cash);
	
	if(cash < price){
		
		alert("bring more cash next time dawg, refreshing page" );
		location = location;
		
	}
	else{
	
		var cash_back = checkCashRegister(price, cash, 
				[["PENNY", 1.01], 
				["NICKEL", 2.05], 
				["DIME", 3.1], 
				["QUARTER", 4.25], 
				["ONE", 90], 
				["FIVE", 55], 
				["TEN", 20], 
				["TWENTY", 60], 
				["ONE HUNDRED", 100]]
			);

		document.getElementById("output2").innerHTML = 
			"<br><br>" +
			"Price: " + price + " " + 
			"Cash: " + cash + " " + "Your Change Total: " + your_change + "<br>" + 
			"register is: " + cash_back.status + "<br>" + cash_back.change + " IS YOUR CHANGE SIR OR MADAM";
	}
	//for(var i = 0; i < 8; i++){
		
		//alert(cash_back.change[i][0] + " " + cash_back.change[i][1]);
		
	//alert(cash_back.change[0][0] + " " + cash_back.change[0][1]);
	/* alert(cash_back.change[1][0] + " " + cash_back.change[1][1]);
	alert(cash_back.change[2][0] + " " + cash_back.change[2][1]);
	alert(cash_back.change[3][0] + " " + cash_back.change[3][1]);
 	alert(cash_back.change[4][0] + " " + cash_back.change[4][1]);
	alert(cash_back.change[5][0] + " " + cash_back.change[5][1]);
	alert(cash_back.change[6][0] + " " + cash_back.change[6][1]); */
		
		//document.getElementById("output2").innerHTML += 
			
		//	cash_back.change[i][0] + " " + cash_back.change[i][1] + "<br>";
		
	//}
	
/* 			final_obj.change[0][0] + " " + final_obj.change[0][1]);
			final_obj.change[1][0] + " " + final_obj.change[1][1]);
			final_obj.change[2][0] + " " + final_obj.change[2][1]);
			final_obj.change[3][0] + " " + final_obj.change[3][1]);
			"change: " + change);
			final_obj.change[4][0] + " " + final_obj.change[4][1]);
			final_obj.change[5][0] + " " + final_obj.change[5][1]);
			final_obj.change[6][0] + " " + final_obj.change[6][1]); */
		
		
	
	
	/* 	 alert(checkCashRegister(19.5, 20, 
	[["PENNY", 1.01], 
	["NICKEL", 2.05], 
	["DIME", 3.1], 
	["QUARTER", 4.25], 
	["ONE", 90], 
	["FIVE", 55], 
	["TEN", 20], 
	["TWENTY", 60], 
	["ONE HUNDRED", 100]])); */
	
/*  	alert(checkCashRegister(3.26, 100, 
	[["PENNY", 1.01], 
	["NICKEL", 2.05], 
	["DIME", 3.1], 
	["QUARTER", 4.25], 
	["ONE", 90], 
	["FIVE", 55], 
	["TEN", 20], 
	["TWENTY", 60], 
	["ONE HUNDRED", 100]]));  
	
	alert(checkCashRegister(19.5, 20, 
	[["PENNY", 0.01], 
	["NICKEL", 0], 
	["DIME", 0], 
	["QUARTER", 0], 
	["ONE", 1], 
	["FIVE", 0], 
	["TEN", 0], 
	["TWENTY", 0], 
	["ONE HUNDRED", 0]])); */
	
}



