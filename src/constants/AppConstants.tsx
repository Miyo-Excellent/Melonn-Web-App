import { nanoid } from 'nanoid';

export default class AppConstants {
  localStorage: { tokenKey: string } = {
    tokenKey: nanoid(),
  };
}
