function sendMail(){
    var params={
        name: document.getElementById("name").value ,
        email: document.getElementById("email").value ,
        subjecgt:document.getElementById("subject").value ,
       message:document.getElementById("message").value ,
    } ;

const serviceID ="service_c5rciyu";
const templateID="template_2g905os";

emailjs
.send(serviceID,templateID,params)
.then((res )=>{
        document.getElementById("name").value= "";
        document.getElementById("email").value= "";
        document.getElementById("subject").value= "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("your message sent successfully")
    }
)
.catch((err)=>console.log(err));
}