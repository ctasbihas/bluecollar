module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        orange: '#FFB342',
        midnightBlue: '#1C2752',
        lightGray: '#F4F4F4',
        mediumGray: '#7E7E7E',
      },
      fontFamily: {
        'jetbrains': ['"JetBrains Mono"', 'monospace'],
      }
    },
  },
  plugins: [],
}
