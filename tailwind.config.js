module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'dark': '#1E1E1E',
        'gold': '#FFB600',
      },
      backgroundImage: {
        'mobileContacts': "url('../src/assets/mobile-contacts.jpg')",
        'desktopContacts': "url('../src/assets/desktop-contacts.jpg')",
      },
    },
  },
  plugins: [],
}