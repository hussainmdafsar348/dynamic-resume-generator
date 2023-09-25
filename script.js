function addNewWeField() {
   // console.log("adding new field")
   // on click of a button a new textarea is created 
   let newNode = document.createElement("textarea");
   // newnode is object created. by createElement new tag element is created
   newNode.classList.add("form-control");
   // adding class name form control by classlist.add in a element name textarea
   newNode.classList.add("weField");
   newNode.setAttribute("rows", 3);
   // setAttribute is used to set value of an attribute of an element
   newNode.setAttribute("placeholder", "Enter Experience");


   let weOb = document.getElementById("we");
   // weob is object of the id is made
   const weAddButtonOb = document.getElementById("weAddButton");
   // weAddButtonOb is object of the id button 
   weOb.insertBefore(newNode, weAddButtonOb);

   // new work experience form group to be added before the button and the 1st experience box. that's why inssertbefore is made
}

function addNewAQField() {
   let newNode1 = document.createElement("textarea");
   newNode1.classList.add("form-control");
   newNode1.classList.add("eqField");
   newNode1.setAttribute("placeholder", "enter Qualification");
   newNode1.setAttribute("row", 3);

   const Aqbuttonob = document.getElementById("aqAddButton");
   const AqOb = document.getElementById("Aq");

   AqOb.insertBefore(newNode1, Aqbuttonob);


}
 
function generateCV() {
   // console.log("hello");
   let nameField = document.getElementById("nameField").value;
   // gives the value of the name of form as created and namefield is an object
   let nameT1 = document.getElementById("nameT1");
   nameT1.innerHTML = nameField;
   // it will add the value into the tamplate from the form  by this    nameT1.innerHTML = nameField;



   document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;
   // contact filed value is added in a template
   document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;
   // address filed value is added in a template
   document.getElementById("nameT2").innerHTML = nameField;
//  fb, insta, link, objective value 
   document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;
   document.getElementById("instaT").innerHTML = document.getElementById("instaField").value;
   document.getElementById("linkedT").innerHTML = document.getElementById("linkedField").value;
   document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;
   

   // work experience

   let wes = document.getElementsByClassName("weField");
   // console.log("wes", wes);
   with the help of an object wes 
   let str = "";
   for (let e of wes) {
      // str= str + "<li>" + e.value + "</li>";
      str = str +  `<li> ${e.value} </li>`;
      // str = `${str} <li> ${e.value} </li>`;
      // str += `<li> ${e.value} </li>`;
   }
   document.getElementById("weT").innerHTML = str;
 

   // qualification 
   let aqs = document.getElementsByClassName("eqField");

   let str1 = "";
   for (let e of aqs) {
      str1 = str1 + `<li> ${e.value} </li>`;
   }
   document.getElementById("aqT").innerHTML = str1;

   // code for Setting Img

   let file = document.getElementById("imgField").files[0];

   console.log(file);
   
   
   let reader = new FileReader();
   reader.readAsDataURL(file);

     console.log(reader.result)

     reader.onloadend= function(){
      document.getElementById("imgTemplate").src= reader.result;
           };




   document.getElementById("cv-form").style.display = "none";

   document.getElementById("cv-template").style.display="block";
// 
}


// document.getElementById("cv-form").style.display="none";
// document.getElementById("cv-template").display= "block";
// cv print

function printCV() {
   window.print();
}