import logo from './logo.svg'
import instaIcon from './instagram.png'
import ytIcon from './youtube.png'
import Playlist from './Playlist'

function App () {
  return (
    <div className='App'>
      <header className='app-header'>
        <img src={logo} className='app-logo' alt='logo' />
        <h1>
          Eat Tacos, Be Kind, and Ride Your Bike!
        </h1>
      </header>

      <header className='sub-header'>
        <h2>Not Necessarily In That Order</h2>
      </header>

      <Playlist />

      <footer className='footer'>
        <div className='signature'>
          <div>pddyrdbrd</div>
          <div>17 jul 2021</div>
          <div>14zgu3z0qe3az4a</div>
        </div>

        <div className='links'>
          <a href='https://instagram.com/paddyredbeard' title='@paddyredbeard'>
            <img src={instaIcon} alt='Instagram icon' />
          </a>

          <a href='https://www.youtube.com/c/PatrickBarabe' title='Patrick on YouTube'>
            <img src={ytIcon} alt='YouTube icon' />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
