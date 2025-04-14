/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'fade-in-down': 'fadeInDown 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'bounce-in': 'bounceIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'scale-in': 'scaleIn 0.5s ease-out',
        'rotate-in': 'rotateIn 0.6s ease-out',
        'shimmer': 'shimmer 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        rotateIn: {
          '0%': { transform: 'rotate(-180deg)', opacity: '0' },
          '100%': { transform: 'rotate(0)', opacity: '1' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
  safelist: [
    'animate__animated',
    'animate__fadeIn',
    'animate__fadeOut',
    'animate__bounce',
    'animate__flash',
    'animate__pulse',
    'animate__rubberBand',
    'animate__shakeX',
    'animate__shakeY',
    'animate__headShake',
    'animate__swing',
    'animate__tada',
    'animate__wobble',
    'animate__jello',
    'animate__heartBeat',
    'animate__backInDown',
    'animate__backInLeft',
    'animate__backInRight',
    'animate__backInUp',
    'animate__backOutDown',
    'animate__backOutLeft',
    'animate__backOutRight',
    'animate__backOutUp',
    'animate__bounceIn',
    'animate__bounceInDown',
    'animate__bounceInLeft',
    'animate__bounceInRight',
    'animate__bounceInUp',
    'animate__bounceOut',
    'animate__bounceOutDown',
    'animate__bounceOutLeft',
    'animate__bounceOutRight',
    'animate__bounceOutUp',
    'animate__fadeIn',
    'animate__fadeInDown',
    'animate__fadeInDownBig',
    'animate__fadeInLeft',
    'animate__fadeInLeftBig',
    'animate__fadeInRight',
    'animate__fadeInRightBig',
    'animate__fadeInUp',
    'animate__fadeInUpBig',
    'animate__fadeInTopLeft',
    'animate__fadeInTopRight',
    'animate__fadeInBottomLeft',
    'animate__fadeInBottomRight',
    'animate__fadeOut',
    'animate__fadeOutDown',
    'animate__fadeOutDownBig',
    'animate__fadeOutLeft',
    'animate__fadeOutLeftBig',
    'animate__fadeOutRight',
    'animate__fadeOutRightBig',
    'animate__fadeOutUp',
    'animate__fadeOutUpBig',
    'animate__fadeOutTopLeft',
    'animate__fadeOutTopRight',
    'animate__fadeOutBottomRight',
    'animate__fadeOutBottomLeft',
    'animate__flip',
    'animate__flipInX',
    'animate__flipInY',
    'animate__flipOutX',
    'animate__flipOutY',
    'animate__lightSpeedInRight',
    'animate__lightSpeedInLeft',
    'animate__lightSpeedOutRight',
    'animate__lightSpeedOutLeft',
    'animate__rotateIn',
    'animate__rotateInDownLeft',
    'animate__rotateInDownRight',
    'animate__rotateInUpLeft',
    'animate__rotateInUpRight',
    'animate__rotateOut',
    'animate__rotateOutDownLeft',
    'animate__rotateOutDownRight',
    'animate__rotateOutUpLeft',
    'animate__rotateOutUpRight',
    'animate__hinge',
    'animate__jackInTheBox',
    'animate__rollIn',
    'animate__rollOut',
    'animate__zoomIn',
    'animate__zoomInDown',
    'animate__zoomInLeft',
    'animate__zoomInRight',
    'animate__zoomInUp',
    'animate__zoomOut',
    'animate__zoomOutDown',
    'animate__zoomOutLeft',
    'animate__zoomOutRight',
    'animate__zoomOutUp',
    'animate__slideInDown',
    'animate__slideInLeft',
    'animate__slideInRight',
    'animate__slideInUp',
    'animate__slideOutDown',
    'animate__slideOutLeft',
    'animate__slideOutRight',
    'animate__slideOutUp'
  ]
} 