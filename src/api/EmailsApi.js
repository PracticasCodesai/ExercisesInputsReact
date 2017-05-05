import delay from './delay';

const emails = ["prueba@gmail.com","jonay@gmail.com","antonio@gmail.com"];

class EmailsApi {

 static loadAllEmails(){
   return new Promise((resolve, reject) => {
     setTimeout(() => {
       resolve(Object.assign([], emails));
     }, delay);

   });
 }

}

export default EmailsApi;
