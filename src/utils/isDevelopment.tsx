import { EnvironmentsEnum } from '.';

export default function isDevelopment() {
  const _environment = process.env.NODE_ENV || EnvironmentsEnum.DEVELOPMENT;

  return new RegExp(_environment, 'gi').test(EnvironmentsEnum.DEVELOPMENT);
}
