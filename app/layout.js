import '../styles/globals.css';
import Header from './Header';

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <Header />
        <section className='p-2'>{children}</section>
      </body>
    </html>
  );
}
