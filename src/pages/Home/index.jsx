import Settings from '../Settings'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
export default function Home () {
  return (
    <div className='flex flex-col min-h-screen bg-red-200'>
      <Header />
      <Settings />
      <Footer />
    </div>
  )
}
