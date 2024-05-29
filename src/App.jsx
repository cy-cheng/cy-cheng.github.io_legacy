import './App.css'
import Header from './Header/Header.jsx'

function App() {
  return (
    <div id="page-container">

      <div id="content-section">
        <Header />
        <div class="centered">
          <div>
            <h2>Hello World!</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat vehicula pellentesque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam consectetur diam imperdiet lorem faucibus congue. Vestibulum gravida ultricies dolor sit amet pellentesque. Curabitur imperdiet ultrices turpis, eu ultrices dolor rhoncus id. Suspendisse viverra finibus leo, ac pretium est eleifend eget. Quisque faucibus orci non erat accumsan commodo. Aenean ac mauris vestibulum, congue turpis non, iaculis diam. Quisque vitae tristique nibh. Cras consequat dignissim ex, eget interdum turpis accumsan sed. Sed non turpis in ligula congue tempus ut sed leo.</p>
          </div>
        </div>
      </div>

      <footer>
        <p>Copyright &copy; {new Date().getFullYear()} Brine</p>
      </footer>
    </div>
  )
}

export default App
