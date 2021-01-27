import './App.css';
import Navigation from './layout/Navigation/Navigation'
import ProductsList from './pages/ProductsList/ProductsList'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import Footer from './layout/Footer/Footer'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (

    <>
      <Navigation />
      <main>
        <Switch>
          <Route exact path="/" component={<ProductsList />} />
          <Route path="/product/:id" component={<ProductDetails />} />
        </Switch>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App;
