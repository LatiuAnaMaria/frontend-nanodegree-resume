/*
This is empty on purpose! Your code to build the resume will go here.
 */$("main").append("Ana");
var email = "a.latiu@yahoo.com";
var newEmail =
	 email.replace("yahoo","google");
$("main").append(newEmail);
console.log (email);
console.log (newEmail);

var formattedName = HTMLheaderName.replace("%data%", "Ana");
var role = "web developer";
var formattedRole = HTMLheaderRole.replace("%data%","student");

$ (#header).append( formattedName);
$ (#header).prepend( formattedRole);
