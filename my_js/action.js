function goToTheAboutCvPage() {
	location.href='about_cv.html'
    // document.getElementById("demo").innerHTML = "Hello World";
}

function loadDatabase() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "my_database.txt", true);
  xhttp.send();
}

function showHint(str) {
    if (str.length == 0) {
        document.getElementById("txtHint").innerHTML = "";
        return;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET", "database.asp?q=" + str, true);
        xmlhttp.send();
    }
}

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function validateForm() {
    var username = document.forms["logIn_form"]["username"].value;
		var password = document.forms["logIn_form"]["password"].value;
    if (username == "") {
        alert("Username field must be filled!");
        return false;
    }
		if (password == "") {
				 alert("Password field must be filled!");
				 return false;
		}
}
