import emailsApi from '../../src/api/EmailsApi';
import * as type from './actionTypes';

export function loadEmailsSuccess(emails) {
  return {type: type.LOAD_EMAILS_SUCCESS, emails};
}

export function loadEmails() {
  return function (dispatch) {
    return emailsApi.loadAllEmails().then(emails => {
      dispatch(loadEmailsSuccess(emails));
    }).catch(error => {
      throw (error);
    });
  };
}
