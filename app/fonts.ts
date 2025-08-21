import localFont from 'next/font/local'

export const brillant = localFont({
  src: '../public/fonts/brillant.otf',  // This navigates from app folder to public folder
  display: 'swap',
  variable: '--font-custom',
})