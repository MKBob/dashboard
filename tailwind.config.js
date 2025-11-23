/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom text colors - use with text- prefix (e.g., text-dull, text-secondary)
        dull: '#8490A2',           // Dull gray for text
        secondary: '#6b7280',      // Medium gray for secondary text
        tertiary: '#9ca3af',       // Light gray for tertiary text
        accent: '#3b82f6',         // Blue for accent text
        success: '#10b981',         // Green for success messages
        warning: '#f59e0b',        // Orange for warnings
        error: '#ef4444',          // Red for errors
        muted: '#6b7280',          // Muted text color
        inverse: '#ffffff',         // White for text on dark backgrounds
      },
    },
  },
  plugins: [],
}

