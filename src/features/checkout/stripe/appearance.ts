import type { Appearance } from "@stripe/stripe-js";

// @/features/checkout/stripe/appearance.ts
;

export const stripeAppearance: Appearance = {
  theme: 'flat' as const,

  variables: {
    colorPrimary: '#0156FF',       // Blue
    colorBackground: '#ffffff',    // White
    colorText: '#000000',          // Black
    colorTextSecondary: '#666666',
    colorDanger: '#ef4444',
    fontFamily: 'Inter, system-ui, sans-serif',
    borderRadius: '6px',           // Professional rounded corners
    spacingUnit: '4px',
  },

  disableAnimations: false,

  rules: {
    '.Input': {
      backgroundColor: '#ffffff',
      border: '1px solid #e5e7eb', // Light gray border
      padding: '12px',
      boxShadow: 'none',
      transition: 'border 0.2s ease',
    },
    '.Input:focus': {
      border: '1px solid #0156FF',
    },
    '.Label': {
      fontWeight: '600',
      marginBottom: '6px',
      fontSize: '14px',
      color: '#1a1a1a',
    },
    '.Tab': {
      border: '1px solid #e5e7eb',
      boxShadow: 'none',
    },
    '.Tab--selected': {
      border: '1px solid #0156FF',
      backgroundColor: '#f0f7ff', // Very light blue background
    },
    '.TabLabel--selected': {
      color: '#0156FF',
    },
  },
};