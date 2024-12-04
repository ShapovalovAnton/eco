
import './App.css';
import { Products } from './components/Products';
import { Header } from './components/Header';
import { SideBar } from './components/Sidebar';
import { Footer } from './components/footer';

function App() {
  return (
    <>
    <Header/>
    <main class="flex">
      <div class="flex flex_column flex2">
      <Products />
      
      </div>
      <SideBar/>
    </main>
      <Footer/>
      </>
  );
}

export default App;
