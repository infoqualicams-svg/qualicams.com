import React from 'react';
import Image from 'next/image';

interface PaymentIconProps {
  className?: string;
  width?: number;
  height?: number;
}

export const VisaIcon: React.FC<PaymentIconProps> = ({ className = "", width = 40, height = 24 }) => (
  <Image
    src="/payment-logos/cards/visa.svg"
    alt="Visa"
    width={width}
    height={height}
    className={`object-contain ${className}`}
  />
);

export const MastercardIcon: React.FC<PaymentIconProps> = ({ className = "", width = 40, height = 24 }) => (
  <Image
    src="/payment-logos/cards/mastercard.svg"
    alt="Mastercard"
    width={width}
    height={height}
    className={`object-contain ${className}`}
  />
);

export const AmexIcon: React.FC<PaymentIconProps> = ({ className = "", width = 40, height = 24 }) => (
  <Image
    src="/payment-logos/cards/american-express.svg"
    alt="American Express"
    width={width}
    height={height}
    className={`object-contain ${className}`}
  />
);

export const PayPalIcon: React.FC<PaymentIconProps> = ({ className = "", width = 40, height = 24 }) => (
  <Image
    src="/payment-logos/apm/paypal.svg"
    alt="PayPal"
    width={width}
    height={height}
    className={`object-contain ${className}`}
  />
);

export const DiscoverIcon: React.FC<PaymentIconProps> = ({ className = "", width = 40, height = 24 }) => (
  <Image
    src="/payment-logos/cards/discover.svg"
    alt="Discover"
    width={width}
    height={height}
    className={`object-contain ${className}`}
  />
);

export const MaestroIcon: React.FC<PaymentIconProps> = ({ className = "", width = 40, height = 24 }) => (
  <Image
    src="/payment-logos/cards/maestro.svg"
    alt="Maestro"
    width={width}
    height={height}
    className={`object-contain ${className}`}
  />
);

export const JCBIcon: React.FC<PaymentIconProps> = ({ className = "", width = 40, height = 24 }) => (
  <Image
    src="/payment-logos/cards/jcb.svg"
    alt="JCB"
    width={width}
    height={height}
    className={`object-contain ${className}`}
  />
);

export const ApplePayIcon: React.FC<PaymentIconProps> = ({ className = "", width = 40, height = 24 }) => (
  <Image
    src="/payment-logos/wallets/apple-pay.svg"
    alt="Apple Pay"
    width={width}
    height={height}
    className={`object-contain ${className}`}
  />
);

export const GooglePayIcon: React.FC<PaymentIconProps> = ({ className = "", width = 40, height = 24 }) => (
  <Image
    src="/payment-logos/wallets/google-pay.svg"
    alt="Google Pay"
    width={width}
    height={height}
    className={`object-contain ${className}`}
  />
);

export const KlarnaIcon: React.FC<PaymentIconProps> = ({ className = "", width = 40, height = 24 }) => (
  <Image
    src="/payment-logos/apm/klarna.svg"
    alt="Klarna"
    width={width}
    height={height}
    className={`object-contain ${className}`}
  />
);

export const IdealIcon: React.FC<PaymentIconProps> = ({ className = "", width = 40, height = 24 }) => (
  <Image
    src="/payment-logos/apm/ideal.svg"
    alt="iDEAL"
    width={width}
    height={height}
    className={`object-contain ${className}`}
  />
);

export const DinersIcon: React.FC<PaymentIconProps> = ({ className = "", width = 40, height = 24 }) => (
  <Image
    src="/payment-logos/cards/diners.svg"
    alt="Diners Club"
    width={width}
    height={height}
    className={`object-contain ${className}`}
  />
);

export const UnionPayIcon: React.FC<PaymentIconProps> = ({ className = "", width = 40, height = 24 }) => (
  <Image
    src="/payment-logos/cards/unionpay.svg"
    alt="UnionPay"
    width={width}
    height={height}
    className={`object-contain ${className}`}
  />
);

// Payment icons group component (Core 8 - including digital wallets)
export const PaymentIcons: React.FC<{ className?: string; iconClassName?: string }> = ({ 
  className = "flex items-center gap-3", 
  iconClassName = "opacity-70 hover:opacity-100 transition-opacity" 
}) => (
  <div className={className}>
    <VisaIcon className={iconClassName} />
    <MastercardIcon className={iconClassName} />
    <AmexIcon className={iconClassName} />
    <DiscoverIcon className={iconClassName} />
    <DinersIcon className={iconClassName} />
    <UnionPayIcon className={iconClassName} />
    <ApplePayIcon className={iconClassName} />
    <GooglePayIcon className={iconClassName} />
  </div>
);

// Extended payment icons group with digital wallets
export const ExtendedPaymentIcons: React.FC<{ className?: string; iconClassName?: string }> = ({ 
  className = "flex items-center gap-3 flex-wrap", 
  iconClassName = "opacity-70 hover:opacity-100 transition-opacity" 
}) => (
  <div className={className}>
    <VisaIcon className={iconClassName} />
    <MastercardIcon className={iconClassName} />
    <AmexIcon className={iconClassName} />
    <DiscoverIcon className={iconClassName} />
    <DinersIcon className={iconClassName} />
    <UnionPayIcon className={iconClassName} />
    <JCBIcon className={iconClassName} />
    <MaestroIcon className={iconClassName} />
    <PayPalIcon className={iconClassName} />
    <ApplePayIcon className={iconClassName} />
    <GooglePayIcon className={iconClassName} />
  </div>
);

// Credit cards only (no digital wallets)
export const CreditCardIcons: React.FC<{ className?: string; iconClassName?: string }> = ({ 
  className = "flex items-center gap-3", 
  iconClassName = "opacity-70 hover:opacity-100 transition-opacity" 
}) => (
  <div className={className}>
    <VisaIcon className={iconClassName} />
    <MastercardIcon className={iconClassName} />
    <AmexIcon className={iconClassName} />
    <DiscoverIcon className={iconClassName} />
    <DinersIcon className={iconClassName} />
    <UnionPayIcon className={iconClassName} />
  </div>
);

// Digital wallets only
export const DigitalWalletIcons: React.FC<{ className?: string; iconClassName?: string }> = ({ 
  className = "flex items-center gap-3", 
  iconClassName = "opacity-70 hover:opacity-100 transition-opacity" 
}) => (
  <div className={className}>
    <ApplePayIcon className={iconClassName} />
    <GooglePayIcon className={iconClassName} />
    <PayPalIcon className={iconClassName} />
  </div>
);

// Stripe-style payment icons (with digital wallets)
export const StripeStylePaymentIcons: React.FC<{ className?: string; iconClassName?: string }> = ({ 
  className = "flex items-center gap-2 flex-wrap", 
  iconClassName = "" 
}) => (
  <div className={className}>
    <VisaIcon className={iconClassName} width={48} height={32} />
    <MastercardIcon className={iconClassName} width={48} height={32} />
    <AmexIcon className={iconClassName} width={48} height={32} />
    <DiscoverIcon className={iconClassName} width={48} height={32} />
    <DinersIcon className={iconClassName} width={48} height={32} />
    <UnionPayIcon className={iconClassName} width={48} height={32} />
    <ApplePayIcon className={iconClassName} width={48} height={32} />
    <GooglePayIcon className={iconClassName} width={48} height={32} />
  </div>
);