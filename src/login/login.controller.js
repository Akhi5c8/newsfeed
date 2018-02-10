import { error } from "util";
export default class LoginController {
    constructor($http) {
        this.$http=$http;
        this.email="";
        this.password="";
        this.error="";
    }
   doLogin(){
       var body={"email":this.email,
                  "password":this.password
     };
     this.$http.post("http://localhost:3000/api/user/login",body) 
     .then((success)=>{
         //server responded with success
alert("success");
        },(error)=>{ 
         //server responded with error
         this.error=error.data.error;
     })
    .catch((exception)=>{
        //Network exception
console.error(exception);
    })
    }

}
LoginController.$inject=["$http"];