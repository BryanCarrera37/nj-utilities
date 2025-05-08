import { Regex } from '@/const-values';

export const isAnEmail = (email: string): boolean => {
  return Regex.EMAIL.test(email);
};
