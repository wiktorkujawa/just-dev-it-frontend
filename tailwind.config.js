module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    extend: {
      colors: {
        'eerie-black': '#212121',
        'mine-shaft': '#303030',
        'accent': '#ffffff1f',
        'linkedin': '#0e76a8'
      },
      borderWidth: {
        1: '1px'
      },
      fontSize: {
        h1: [`${40 / 16}rem`, {
          lineHeight: '1.5'
        }],
        h2: [`${32 / 16}rem`, {
          lineHeight: '1.5'
        }],
        h3: [`${24 / 16}rem`, {
          lineHeight: '1.5'
        }],
        h4: [`${16 / 16}rem`, {
          lineHeight: '1.5'
        }],
        p1: [`${16 / 16}rem`, {
          lineHeight: '2'
        }],
        p2: [`${14 / 16}rem`, {
          lineHeight: '2'
        }],
        p3: [`${12 / 16}rem`, {
          lineHeight: '2'
        }],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
