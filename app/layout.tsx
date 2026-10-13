import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'Gas Guerrero · Tu gas, sin complicaciones',description:'Solicita tu recarga de gas LP en Aragón y alrededores. Elige cantidad, comparte tu ubicación y solicita tu horario de entrega.',icons:{icon:'/favicon.svg'}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="es-MX"><body>{children}</body></html>}
