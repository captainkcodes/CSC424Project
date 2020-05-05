let orderButton = document.getElementById("order");
let itemList = document.getElementById("classsel");
let outputBox = document.getElementById("output");
var x = document.getElementById("classification");

var i = x.selectedIndex;

 function thebutton() {
	 
  let collection = itemList.selectedOptions;
  let output = "";
  var database = firebase.database(); 
  var ref = database.ref('users');
  var user = firebase.auth().currentUser;

  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
  // User is signed in.
  for (let i=0; i<collection.length; i++) {

    output = collection[i].label;
	if(x.selectedIndex == 0)
	    ref.child(user.uid).child('Freshmen').push().set({
			"Freshmenclass": output
	});
	if(x.selectedIndex == 1)
		ref.child(user.uid).child('Sophomore').push().set({
			"Sophomoreclass": output
	});
	if(x.selectedIndex == 2)
		ref.child(user.uid).child('Junior').push().set({
			"Juniorclass": output
	});
	if(x.selectedIndex == 3)
		ref.child(user.uid).child('Senior').push().set({
			"Seniorclass": output
	});
					
}
}
	});

	

	orderButton.addEventListener("click", function() {
		var freshTextArea = document.getElementById('display').value;
		var sophTextArea = document.getElementById('display2').value;
		var junTextArea = document.getElementById('display3').value;
		var senTextArea = document.getElementById('display4').value;

		localStorage.setItem('Freshman Classes', freshTextArea);
		localStorage.setItem('Sophomore Classes', sophTextArea);
		localStorage.setItem('Junior Classes', junTextArea);
		localStorage.setItem('Senior Classes', senTextArea);

		alert("Classes saved!");
		console.log("Classes saved!")
	} , false);

}



// arguments: reference to select list, callback function (optional)
function getSelectedOptions(sel, fn) {
var opts = [], opt;

// loop through options in select list
for (var i=0, len=sel.options.length; i<len; i++) {
opt = sel.options[i];

// check if selected
if ( opt.selected ) {
// add to array of option elements to return from this function
opts.push(opt);

// invoke optional callback function if provided
if (fn) {
	fn(opt);
}
}
}

// return array containing references to selected option elements
return opts;
}
function callback(opt) {
// display in textarea for this example
var x = document.getElementById("classification");
var i = x.selectedIndex;

if(x.selectedIndex == 0){
var display = document.getElementById('display');
display.innerHTML += opt.text + '\n';
}

if(x.selectedIndex == 1 ){
var display = document.getElementById('display2');
display.innerHTML += opt.text + '\n';
}


if(x.selectedIndex == 2){
var display = document.getElementById('display3');
display.innerHTML += opt.text + '\n';
}


if(x.selectedIndex == 3){
var display = document.getElementById('display4');
display.innerHTML += opt.text + '\n';
}
var display = document.getElementById('display5');
display.innerHTML += opt.text + '\n';
}

document.getElementById('classsel').onchange = function(e) {

var x = document.getElementById("classification");

var i = x.selectedIndex;

if(x.selectedIndex == 0){
// get reference to display textarea
var display = document.getElementById('display');
display.innerHTML = ''; // reset

// callback fn handles selected options
getSelectedOptions(this, callback);

// remove ', ' at end of string
var str = display.innerHTML;
display.innerHTML = str;
}

if(x.selectedIndex == 1 ){
// get reference to display textarea
var display = document.getElementById('display2');
display.innerHTML = ''; // reset

// callback fn handles selected options
getSelectedOptions(this, callback);

// remove ', ' at end of string
var str = display.innerHTML;
display.innerHTML = str;
}


if(x.selectedIndex == 2){
// get reference to display textarea
var display = document.getElementById('display3');
display.innerHTML = ''; // reset

// callback fn handles selected options
getSelectedOptions(this, callback);

// remove ', ' at end of string
var str = display.innerHTML;
display.innerHTML = str;
}


if(x.selectedIndex == 3){
// get reference to display textarea
var display = document.getElementById('display4');
display.innerHTML = ''; // reset

// callback fn handles selected options
getSelectedOptions(this, callback);

// remove ', ' at end of string
var str = display.innerHTML;
display.innerHTML = str;
}
};

document.getElementById('demoForm').onsubmit = function(e) {
// reference to select list using this keyword and form elements collection
// no callback function used this time
var opts = getSelectedOptions( this.elements['classsel[]'] );

var x = document.getElementById("classification");

var i = x.selectedIndex;

return false; 
};