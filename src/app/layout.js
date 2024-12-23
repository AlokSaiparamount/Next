import './assets/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Head from 'next/head';




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"  />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/brands.min.css"  />
        <link rel="preconnect" href="https://fonts.googleapis.com/" />
       <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
       <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100;0,9..40,200;0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;1,9..40,100;1,9..40,200;1,9..40,300;1,9..40,400;1,9..40,500;1,9..40,600&amp;family=Syne:wght@400;500;600&amp;family=Yantramanav:wght@100;300;400;500;700;900&amp;display=swap" rel="stylesheet" />
      </head>
      <body >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
