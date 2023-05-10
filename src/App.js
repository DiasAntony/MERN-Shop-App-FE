import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
        <h1>hello</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;

// If we got responsive design problem don't worry we would change the version of bootstrap 4.5.2 and bootstrap.min.css!!