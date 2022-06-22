import Contact from './Contact';
import NavBar from './NavBar'
import Social from './Social';

const Layout = ({ children }) => (
  <>
    <NavBar />
    <Social />
    <Contact />
    <main className="container py-4">
      {children}
    </main>
  </>
)
export default Layout;