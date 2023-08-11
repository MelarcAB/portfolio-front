export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // Esto activa el modo oscuro basado en clases
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'inters': ['Inter', 'sans-serif']
      },
      // Si quieres extender los colores para el modo oscuro
      backgroundColor: {
        'primary-dark': '#2d3748',
        'secondary-dark': '#4a5568',
      },
      textColor: {
        'primary-dark': '#e2e8f0',
      },
      // ... otros colores personalizados ...
    }
  },
  plugins: [],
}
