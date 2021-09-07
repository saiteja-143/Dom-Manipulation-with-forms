var fname   = document.getElementById("fname");
var lname   = document.getElementById("lname");
var Address = document.getElementById("Address");
var pin     = document.getElementById("pincode");
var gender  = document.getElementById("gender");
var food    = document.getElementById("food");
var state   = document.getElementById("state");
var country = document.getElementById("country");

function TableData(fname,lname,Address,pin,gender,food,state,country){
    console.log(Address);
    

var tbody = document.getElementById("tbody")

var trow  = document.createElement("tr")

var tdata1 = document.createElement("td")
var tdata2 = document.createElement("td")
var tdata3 = document.createElement("td")
var tdata4 = document.createElement("td")
var tdata5 = document.createElement("td")
var tdata6 = document.createElement("td")
var tdata7 = document.createElement("td")
var tdata8 = document.createElement("td")

// FINAL STEP DECLARE TABLE INPUT = FORM INPUT 
//now text inserted in tabled date
tdata1.innerHTML= fname;
tdata2.innerHTML= lname;
tdata3.innerHTML= Address;
tdata4.innerHTML= pin;
tdata5.innerHTML= gender;
tdata6.innerHTML= food;
tdata7.innerHTML= state;
tdata8.innerHTML= country;


// now append td => tr TASK 
trow.append(tdata1,tdata2,tdata3,tdata4,tdata5,tdata6,tdata7,tdata8);

// now append tr => tbody TASK COMPLETED OF LINKING FORM AND TABLE
tbody.append(trow);

}


var button = document.getElementById("submit");

button.addEventListener("click",function(x){
    x.preventDefault();

var gender = document.getElementsByName("gender");
console.log(gender);
var inputvalue;
for(i=0;i<gender.length;i++){
    if(gender[i].checked){
        inputvalue = gender[i].value;
       
    }
}


var food =document.getElementsByName("food")
console.log(food);

var box =[];
var count =0;
for(i=0;i<food.length;i++){
    if(food[i].checked){
        box.push(food[i].value);
        count++;       
    }
}

if (box.length>=2){
    var output =box.join(",");
    
}else{
    output= alert("Choose atleast 2 foods");
}

TableData(fname.value,lname.value,Address.value,pin.value,
    inputvalue,output,state.value,country.value)

    // Reset the form once clicked
document.getElementById("form1").reset();


});
