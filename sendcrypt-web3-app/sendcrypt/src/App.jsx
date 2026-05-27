import Nav from '@/components/Nav'
import Connection from '@/components/Connection'
import Advantages from '@/components/Advantages'
import Form from '@/components/Form'
import Customs from '@/components/Customs'
import Footer from '@/components/Footer'
import './App.css'

function App() {
  return (
    <>  
      <section className='flex flex-col gap-64'>
        <Nav />
        <Connection />
        <Advantages />
        <Form />
        <Customs />
        <Footer />
      </section>
    </>
  )
}

export default App
