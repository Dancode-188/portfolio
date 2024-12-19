import Navigation from '../components/shared/Navigation'
import Footer from '../components/shared/Footer'

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-primary">
      <Navigation />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout