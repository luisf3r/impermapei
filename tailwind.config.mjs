/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {	
				primary: '#295B83', // Títulos sobre fondo claro
				secondary: '#C4CAD3', // Títulos sobre fondo oscuro
				accent: '#0078C1', // Color de acento para destacar
				backgroundLight: '#F3F4F4', // Fondo claro
				backgroundDark: '#295B83', // Fondo oscuro
				button: '#295B83', // Color para botones principales
				buttonHover: '#224B6D', // Hover en botones principales
				support: '#E771A5', // Color de apoyo para secciones o íconos secundarios
				supportHover: '#E4629B', // Hover en apoyo
				link: '#0078C1', // Links e interacciones
				muted: '#7C878E', // Color apagado (puedes decidir si lo mantienes o lo reemplazas)
				default: '#282828',
				ghostwhite: '#F0EFF4',
				antiFlashWhite: '#e5e7eb',
				frenchGray: '#C4CAD3',	
				ashgray: '#E9EDE8',
				dodgerblue: {
				  DEFAULT: '#0072CE',
				  translucent: 'rgba(0, 114, 206, 0.2)', // 50% de opacidad
				},
				fireBrick: '#C30B21',
				persianRed: '#D42A35',
				marianBlue: '#124496',
				processCyan: '#00B4EC',
			},
		},
	},
	plugins: [
	],
}
