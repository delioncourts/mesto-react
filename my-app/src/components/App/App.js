//import './App.css';
import React from 'react';
//import Card from '../Card';
import Footer from '../Footer';
import Header from '../Header';
import ImagePopup from '../ImagePopup';
import Main from '../Main';
import PopupWithForm from '../PopupWithForm';

function App() {
  return ( <div>
    <div className="page">
      <Header />
      <Main />
<Footer />
</div>
<ImagePopup />
<Main />
<PopupWithForm />
    </div>
  );
}

export default App;
