import { createContext } from 'react'
import './App.css'
import { images } from './assets/images'
import Gallery from './components/container/gallery';

export const ImageContext = createContext();

function App() {


  return (
    <>
     <ImageContext.Provider value={images}>
        <Gallery/>
     </ImageContext.Provider>
    </>
  )
}

export default App
