import axios from 'axios';
import Constants from '../constants';
import { SignUpUserDataType } from 'types';

export default class MelonnService {
  protected constants: Constants = new Constants();

  public async signIn(email: string, password: string) {
    const { data } = await axios.post(`${this.constants.paths.api.melonn}/auth/sign-in`, { email, password });

    return data;
  }

  public async signUp(userData: SignUpUserDataType) {
    const { data } = await axios.post(`${this.constants.paths.api.melonn}/auth/sign-up`, userData);

    return data;
  }
}
