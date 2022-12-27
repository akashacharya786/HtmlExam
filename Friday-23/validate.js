let arr=[];
function validate(){
    var x = document.getElementById("formGroupExample3").value;
    var y = document.getElementById("formGroupExample4").value;
    var userID = document.getElementById("formGroupExample1").value;
    var usrename = document.getElementById("formGroupExample2").value;
    var dob = document.getElementById("formGroupExample5").value;
    var add = document.getElementById("formGroupExample6").value;
    var ed = document.getElementById("formGroupExample7").value;
    arr.push(userID);
    arr.push(usrename);
    arr.push(dob);
    arr.push(add);
    arr.push(ed);
    var Print = "user Id :"+arr[0]+"<br>"+"user Name: "+arr[1]+"<br>"+"DOB: "+arr[2]+"<br>"+"Address: "+arr[3];
    localStorage.setItem("Print",Print);
    
    if(x != y){
        alert("Password doesn't matched");
        return false
    }
    else{
        alert('password matched');
        return true 
    }
   
    
   
}
