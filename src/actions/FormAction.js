import emailsApi from '../../src/api/EmailsApi';
import * as type from './actionTypes';

export function loadEmailsSuccess(emails) {
  return {type: type.LOAD_EMAILS_SUCCESS, emails}
}

export function loadEmails() {
  return function (dispatch) {
  //  dispatch(loadEmailsSuccess({emails: ['prueba@gmail.com1']}));

    return emailsApi.loadAllEmails().then(emails => {
      console.log("xxxxxxxxxxxxxxxxx");
      dispatch(loadEmailsSuccess(emails));
    }).catch(error => {
      console.log("xxxxxxxxxxxxxxxxx");
      throw (error);
    });
  }
}
