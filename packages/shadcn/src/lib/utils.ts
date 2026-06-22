import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export {
  REGEXP_ONLY_CHARS,
  REGEXP_ONLY_DIGITS,
  REGEXP_ONLY_DIGITS_AND_CHARS,
} from 'input-otp'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}