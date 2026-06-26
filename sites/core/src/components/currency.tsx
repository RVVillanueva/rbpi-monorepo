import { useRBPIAuthContext } from "@/context/RBPIAuthProvider";

export function AuthCurrency({
  amount,
  currency = 'PHP',
  locale = 'en-PH',
  compact = false,
  digits = compact ? 1 : 2,
}: {
  amount: number;
  currency?: string;
  locale?: string;
  compact?: boolean;
  digits?: number;
}) {
  const auth = useRBPIAuthContext()
  const usedLocale = locale ?? auth.getOrganizationProfile()?.defaultLocale ?? 'en-US'
  const usedCurrency = currency ?? auth.getOrganizationProfile()?.defaultCurrency ?? 'USD'

  const props = {
    amount,
    digits,
    currency: usedCurrency,
    locale: usedLocale,
    compact,
  }

  return <Currency {...props} />
}

export function Currency({
  amount,
  currency = 'PHP',
  locale = 'en-PH',
  compact = false,
  digits = compact ? 1 : 2,
}: {
  amount: number
  currency?: string
  locale?: string
  compact?: boolean
  digits?: number
}) {
  const format = () => {
    if (compact) {
      const units = [
        { value: 1_000_000_000, suffix: 'B' },
        { value: 1_000_000, suffix: 'M' },
        { value: 1_000, suffix: 'K' },
      ];

      const unit = units.find((u) => Math.abs(amount) >= u.value);

      if (unit) {
        const absoluteValue = Math.abs(amount / unit.value).toFixed(digits);
        const formattedSuffixString = `${absoluteValue}${unit.suffix}`;
        const formatter = new Intl.NumberFormat(locale, { style: 'currency', currency });
        
        if (amount < 0) {
          const parts = formatter.formatToParts(-1);
          return parts.map(p => {
            if (p.type === 'integer' || p.type === 'decimal' || p.type === 'fraction') {
              return p.type === 'integer' ? formattedSuffixString : '';
            }
            return p.value;
          }).join('');
        }
        
        const symbol = formatter.formatToParts(0).find((p) => p.type === 'currency')?.value ?? '₱';
        return `${symbol}${formattedSuffixString}`;
      }
    }

    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      minimumFractionDigits: digits,
      maximumFractionDigits: digits,
    }).format(amount);
  };

  return <data value={amount}>{ format() }</data>
}