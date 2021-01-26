import './App.css';
import Navigation from './layout/Navigation/Navigation'
import ProductsList from './pages/ProductsList/ProductsList'
import Footer from './layout/Footer/Footer'


function App() {
  return (
    <>
      <Navigation />
      <main>
        <ProductsList />
      </main>
      <Footer></Footer>
    </>
  )
}

export default App;
