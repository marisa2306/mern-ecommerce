import './App.css';
import Navigation from './layout/Navigation/Navigation'
import ProductList from './layout/ProductList/ProductList'
import Footer from './layout/Footer/Footer'


function App() {
  return (
    <>
      <Navigation />
      <main>
        <ProductList />
      </main>
      <Footer></Footer>
    </>
  )
}

export default App;
