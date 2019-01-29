  	function submitForm() {
  		document.getElementById('form').addEventListener('submit', function(event) {
  			event.preventDefault();
  		});
  		dataIsValid();
  	}

  	function dataIsValid() {
  		if(document.getElementById('fname').value === "") {
			  document.getElementById('fspan').innerHTML = "Please enter first name";
			  document.getElementById('fname').focus();
  		}
  		if(document.getElementById('lname').value > 15) {
			  document.getElementById('lspan').innerHTML = "Last Name must be less than 15 characters";
			  document.getElementById('lname').focus();
  		}
  		if(document.getElementById('email').value.search(/^([a-zA-Z0-9]{2,}@([a-zA-Z0-9]{2,})\.([a-z]{2,})$)/) == -1) {
			  document.getElementById('espan').innerHTML = "Please enter Email";
			  document.getElementById('email').focus();
  		}
  		if(document.getElementById('pass').value.search(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])[A-Za-z0-9]{8,}$/) == -1) {
			  document.getElementById('pspan').innerHTML = "Invalid password";
			  document.getElementById('pass').focus();
  		}
  		else {
  			storeData();
  		}
  	}
  	function storeData() {
      var data = {
      	firstName: document.getElementById('fname').value,
      	lastName: document.getElementById('lname').value,
      	email: document.getElementById('email').value,
      	pass: document.getElementById('pass').value,
      	hobbies: [document.getElementById('check1').checked ? 'Music' : '', document.getElementById('check2').checked ? 'Dance' : '', document.getElementById('check3').checked ? 'Cook' : '', document.getElementById('check4').checked ? 'Travel' : '' ],
      	qualification: document.getElementById('select1').value,
      	dateOfBirth: document.getElementById('date').value,
      	gender: [document.getElementById('radio1').checked ? 'male' : '',
      	document.getElementById('radio2').checked ? 'female' : '',
      	document.getElementById('radio3').checked ? 'others' : ''],
      	notes: document.getElementById('textarea').value 
      };
      var json = JSON.stringify(data);
      localStorage.info = json;
  	}

function showData() {
	var information = JSON.parse(localStorage.info);
    for(var i in information) {
      document.getElementById('show').innerHTML += i + ' : ' + information[i] + "<br>"
    }
}
function removeSpan1() {
	if(document.getElementById('fname').value === '') {
	document.getElementById('fspan').innerHTML = 'Invalid Name';
	}
	else {
		document.getElementById('fspan').innerHTML = '';
	}
}
function removeSpan2() {
	if(document.getElementById('lname').value > 15) {
	document.getElementById('lspan').innerHTML = 'Invalid Last Name';
	}
	else {
		document.getElementById('lspan').innerHTML = '';
	}
}
function removeSpan3() {
	if(document.getElementById('email').value.search(/^([a-zA-Z0-9]{2,}@([a-zA-Z0-9]{2,})\.([a-z]{2,})$)/) == -1) {
	document.getElementById('espan').innerHTML = 'Invalid Email';
	}
	else {
		document.getElementById('espan').innerHTML = '';
	}
}
function removeSpan4() {
	if(document.getElementById('pass').value.search(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])[A-Za-z0-9]{8,}$/) == -1) {
		document.getElementById('pspan').innerHTML = 'Invalid password'
	} else {
		document.getElementById('pspan').innerHTML =  '';
	}
}