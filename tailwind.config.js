/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter"],
    },
    minHeight: {
      sidebar: '90vh'
    },
    extend: {
      fontSize: {
        "heading-1": ['26px', '39px'],
        "heading-2": ['24px', '36px'],
        "heading-3": ['22px', '33px'],
        "sub-header-1": ['20px', '30px'],
        "sub-header-2": ['18px', '27px'],
        "body-text-1": ['14px', '21px'],
        "body-text-2": ['12px', '18px'],
        "caption-1": ['10px', '15px'],
        "caption-2": ['8px', '12px']
      },
      colors: {
        background: "#FBFBFB",
        blue: {
          50: "#F0F5FF",
          100: "#CFDFFF",
          200: "#AECAFF",
          300: "#8DB4FF",
          400: "#6C9EFF",
          500: "#5182E1",
          600: "#3967BF",
          700: "#254E9C",
          800: "#15387B",
          900: "#0A2559",
        },
        yellow: {
          50: "#FFF8E6",
          100: "#FFEDB9",
          200: "#FFE28C",
          300: "#FFD75F",
          400: "#FFCB32",
          500: "#EBB105",
          600: "#C29100",
          700: "#997300",
          800: "#715400",
          900: "#483600",
        },
        red: {
          50: "#FFEEED",
          100: "#FFC8C5",
          200: "#FFA29C",
          300: "#FE7C74",
          400: "#ED5047",
          500: "#CB3A31",
          600: "#A9271F",
          700: "#871811",
          800: "#650D07",
          900: "#430501",
        },
        orange: {
          50: "#FFF5EC",
          100: "#FFE0C3",
          200: "#FFCB9A",
          300: "#FFB671",
          400: "#EF9643",
          500: "#CD7B2E",
          600: "#AB621D",
          700: "#894A0F",
          800: "#673505",
          900: "#452100",
        },
        green: {
          50: "#F5FFFA",
          100: "#D7FFEC",
          200: "#BAFFDD",
          300: "#9CFFCF",
          400: "#87EABA",
          500: "#6ECD9F",
          600: "#57B085",
          700: "#43936C",
          800: "#317654",
          900: "#21593E",
        },
        gray: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#EEEEEE",
          300: "#E0E0E0",
          400: "#BDBDBD",
          500: "#9E9E9E",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
        },
        "blue-gray": {
          50: "#E3E7ED",
          100: "#B9C3D3",
          200: "#8D9DB5",
          300: "#627798",
          400: "#415C84",
          500: "#1A4373",
          600: "#133C6B",
          700: "#083461",
          800: "#022B55",
          900: "#001B3D",
        },
        purple: {
          50: "#F5E8FF",
          100: "#E2BEFF",
          200: "#D094FF",
          300: "#BD6AFF",
          400: "#AB40FF",
          500: "#9416F8",
          600: "#7400CF",
          700: "#5D00A6",
          800: "#46007D",
          900: "#2F0055",
        },
        black: "#1C1C1C",
        white: "#FFFFFF",

        // primary
        "primary-blue": "#254E9C",
        "primary-yellow": "#EBB105",

        // status
        error: "#CB3A31",
        success: "#43936C",
        warning: "#EF9643",
        "soft-blue": "#F0F5FF",
        "soft-yellow": "#FFF8E6",
        "soft-error": "#FFC8C5",
        "soft-success": "#BAFFDD",
        "soft-warning": "#FFE0C3",

        // typography
        typography: "#212121",
        stroke: "#EEEEEE",
      },
      inset: {
        '21': '95px',
      },
      height: {
        '21': '88px',
        '23': '91px',
        '13': '55px'
      },
      width: {
        'modal-xl': "900px",
        'modal-lg': "576px",
        'modal-md': "512px",
        'modal-sm': "448px",
        'modal-xs': "384px",
      },
      padding: {
        5.5: "22px",
        7.5: "30px"
      },
      screens: {
        'screen-870': '870px',
        'screen-520': '520px'
      },
      backgroundImage: {
        'gradient-auth': 'linear-gradient(209deg, #2A9BD6 0%, #133FA7 100%)'
      },
    },
  },
  plugins: [],
};
