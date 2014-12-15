var formValidation = function(){  
  var in1 = document.registration.name;
  var in2 = document.registration.email;
  var in3 = document.registration.courses[0].checked;
  var in4 = document.registration.courses[1].checked;
  var in5 = document.registration.courses[2].checked;
  if(allLetter(in1))
  {  
    if(ValidateEmail(in2))
    {
		var ref = new Firebase("https://flickering-torch-4353.firebaseio.com/students");
		return ref.push({
		  name: in1.value,
		  email: in2.value,
		  track1: in3,
		  track2: in4,
		  track3: in5,
      laptop: document.courses[4].checked
		  }, 
		  alert("You have signed up! Check your email for Confirmation.")
		);
	}
  }
  return false;  
}

function allLetter(uname)  
{   
	var letters = /^[A-Za-z\s]+$/;  
	if(uname.value.match(letters))  
	{  
		return true;  
	}  
	else  
	{  
		alert('name must have alphabet characters only');  
		uname.focus();  
		return false;  
	}  
}

function dobCheck(udob)
{
  var date = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/
  if(!udob.value.match(date))
  {
    alert('please enter date in MM/dd/yyyy format')
    udob.focus()
    return false;
  }
  var today = new Date();
  var uDate = Date.parse(udob.value);

  var age = Math.floor((today.getTime() - uDate)/(1000*60*60*24*365.25));
  if(age < 13 || age > 18)
  {
    alert('you must be between the age of 13 and 18')
    udob.focus()
    return false;
  }
  return true;
}

function ValidateEmail(uemail)  
{  
	var mailformat = /^\w+([\.-]?\w+)+@\w+([\.-]?\w+)+(\.\w{2,3})+$/;  
	if(uemail.value.match(mailformat))  
	{
		
		return true;  
	}  
	else  
	{  
		alert("You have entered an invalid email address!");  
		uemail.focus();  
		return false;  
	}
}