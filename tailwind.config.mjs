/**
 * Tailwind theme for THE OFFICE Lounge Bar.
 * The brand colors below are the single source of truth for styling.
 * (They are mirrored as CSS variables in src/styles/global.css for raw CSS.)
 *
 * @type {import('tailwindcss').Config}
 */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // --- Backgrounds (dark navy, never pure black) ---
        navy: {
          base: '#0E1729', // primary page background
          elevated: '#16213B', // cards / raised sections
          deep: '#0A1020', // footer / overlays (deepest)
        },
        // --- Text ---
        ink: '#ECEFF4', // primary off-white text (NOT pure white) ~13:1 on navy.base
        muted: '#A9B4C6', // secondary / muted text (passes AA for body on navy)
        // --- Accents ---
        accent: '#2E5BBA', // brand navy-blue (divider lines, like the printed menu)
        'accent-bright': '#6E9BE8', // lighter blue for links / hover (AA on dark)
        gold: '#C9A86A', // champagne gold for premium touches & prices / CTAs
      },
      fontFamily: {
        // Elegant high-contrast serif for headings (supports Cyrillic + Cyrillic-ext)
        serif: ['"Playfair Display"', 'Georgia', 'Times New Roman', 'serif'],
        // Clean geometric sans for body/menu/UI (supports Cyrillic + Cyrillic-ext)
        sans: ['"Montserrat"', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      // Extra alpha steps used in the UI (Tailwind's default scale skips these,
      // so e.g. bg-gold/12 or border-white/8 would otherwise be dropped).
      opacity: {
        8: '0.08',
        12: '0.12',
        85: '0.85',
        98: '0.98',
      },
      letterSpacing: {
        brand: '0.18em',
      },
      maxWidth: {
        content: '1200px',
      },
      boxShadow: {
        card: '0 12px 40px -12px rgba(0, 0, 0, 0.55)',
        gold: '0 8px 30px -8px rgba(201, 168, 106, 0.45)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 1s ease both',
        bob: 'bob 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
