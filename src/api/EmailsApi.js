import delay from './delay';

const emails = ["prueba@gmail.com"];

class EmailsApi {

 static loadAllEmails(){
   return new Promise((resolve, reject) => {
       console.log(Object.assign([], emails));

     setTimeout(() => {
       resolve(Object.assign([], emails));
     }, 1000);

   });
 }

}

export default EmailsApi;
