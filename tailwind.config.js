module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class', // or 'media' or 'class'
  important: true,
  theme: {
    extend: {
      colors: {
        'eerie-black': '#212121',
        'mine-shaft': '#303030',
        'white-smoke': '#f0f0f0',
        'accent-dark': '#ffffff1f',
        'accent-light': '#000001f',
        'linkedin': '#0e76a8',
        'pink-hover': '#d63384',
        'red-hover': '#dc3545'
      },
      borderWidth: {
        1: '1px'
      },
      fontSize: {
        h1: [`${40 / 16}rem`, {
          lineHeight: '1.5'
        }],
        h2: [`${36 / 16}rem`, {
          lineHeight: '1.5'
        }],
        h3: [`${32 / 16}rem`, {
          lineHeight: '1.5'
        }],
        h4: [`${28 / 16}rem`, {
          lineHeight: '1.5'
        }],
        h5: [`${24 / 16}rem`, {
          lineHeight: '1.5'
        }],
        h6: [`${20 / 16}rem`, {
          lineHeight: '1.5'
        }],
        h7: [`${16 / 16}rem`, {
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
