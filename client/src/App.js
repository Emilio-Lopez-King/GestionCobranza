import React from 'react';
import {Header,Footer,Cobranza} from './Components/IndexGeneral';
import { EstadoProvider } from './Components/Context/CobranzaContext';

function App() {
  return (
    <div className="font-custom min-h-screen flex flex-col">
        <Header />
        <EstadoProvider>
        <Cobranza />
        </EstadoProvider>
        <Footer />
    </div>
  );
}

export default App;