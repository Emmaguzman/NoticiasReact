import React,{Fragment,useState,useEffect} from 'react';

import Formulario from './components/Formulario';
import Header from './components/Header';
import ListadoNoticias from './components/ListadoNoticia';


function App() {
//definir categoria y noticias
  const [categoria,setCategoria]=useState('');
  const [noticias,setNoticias]=useState([]);
  const KEY="2de01df7f9754fe696195f1849c13e64";
 
  useEffect(()=>{
  const consultarAPI=async()=>{
    const URL=`http://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=${KEY}`
    const res=await fetch(URL);
    const noticias=await res.json();
    setNoticias(noticias.articles);

    }
    consultarAPI();
  },[categoria])

  return (
    <Fragment>
    <Header
      titulo="Buscador de Noticias"
    />
    <div className="container white">
      <Formulario
      setCategoria={setCategoria}
      />
      <ListadoNoticias
      noticias={noticias}
      />
    </div>
    </Fragment>
  )
}

export default App;
