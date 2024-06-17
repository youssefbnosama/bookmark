import './App.css';
import Download from './components/Download';
import Features from './components/Features';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Ques from './components/Ques';
function App() { 

   
return(
<div className='App'>
<Navbar />
<Header />
<Features />
<Download />
<Ques />
<Form />
<Footer />
</div>
)
}
export default App;
