// @/features/checkout/stripe/appearance.js
export const stripeAppearance = {
  theme: 'night' as const, 

  variables: {
    colorPrimary: '#0156FF',        // তোমার electric blue
    colorBackground: '#111111',     // obsidian surface
    colorText: '#ffffff',
    colorTextSecondary: '#888888',
    colorDanger: '#ff4444',
    fontFamily: 'Inter, sans-serif',
    borderRadius: '8px',
    spacingUnit: '4px',
  },

  rules: {
    '.Input': {
      backgroundColor: '#0a0a0a',
      border: '1px solid #222222',
      color: '#ffffff',
    },
    '.Input:focus': {
      border: '1px solid #0156FF',
      boxShadow: '0 0 0 2px rgba(1, 86, 255, 0.15)',
    },
    '.Label': {
      fontFamily: '"Fira Code", monospace',
      fontSize: '10px',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      color: '#444444',
    },
    '.Tab': {
      backgroundColor: '#111111',
      border: '1px solid #1a1a1a',
    },
    '.Tab--selected': {
      borderColor: '#0156FF',
      backgroundColor: '#0156FF15',
    },
  },
};