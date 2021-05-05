import Constants from '../constants';

const constants: Constants = new Constants();

export default async (): Promise<string> => localStorage.getItem(constants.app.localStorage.tokenKey) || '';
