export const appearance = {
  theme: 'stripe', // base: 'stripe' | 'flat' | 'night' | 'none'

  variables: {
    // ---- Brand colors (change these) ----
    colorPrimary: '#6366f1',       // brand color
    colorBackground: '#ffffff',
    colorText: '#1a1a2e',
    colorTextSecondary: '#6b7280',
    colorDanger: '#ef4444',        // error messages

    // ---- Typography ----
    fontFamily: 'Inter, sans-serif', // match app font
    fontSizeBase: '14px',
    fontWeightNormal: '400',
    fontWeightMedium: '500',

    // ---- Spacing & shape ----
    spacingUnit: '4px',
    borderRadius: '8px',           // match Tailwind rounded-lg
  },

  rules: {
    // Input field styling
    '.Input': {
      border: '1.5px solid #e2e8f0',
      boxShadow: 'none',
      padding: '10px 14px',
      backgroundColor: '#fff',
      transition: 'border .2s, box-shadow .2s',
    },
    '.Input:focus': {
      border: '1.5px solid #6366f1',
      boxShadow: '0 0 0 3px rgba(99,102,241,0.12)',
      outline: 'none',
    },
    '.Input--invalid': {
      border: '1.5px solid #ef4444',
    },

    // Label styling
    '.Label': {
      fontWeight: '500',
      fontSize: '13px',
      color: '#4a4a6a',
      marginBottom: '6px',
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
    },

    // Error text
    '.Error': {
      fontSize: '12px',
      color: '#ef4444',
    },

    // Tab buttons (payment method selector)
    '.Tab': {
      border: '1.5px solid #e2e8f0',
      borderRadius: '8px',
      boxShadow: 'none',
    },
    '.Tab--selected': {
      border: '1.5px solid #6366f1',
      boxShadow: '0 0 0 3px rgba(99,102,241,0.12)',
    },
  },
};