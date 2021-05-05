import { EnvironmentsEnum } from '.';
import Constants from '../constants';

const constants = new Constants();

export default function isEnvironment(environment: EnvironmentsEnum) {
  return constants.app.environments.indexOf(environment) !== -1;
}
