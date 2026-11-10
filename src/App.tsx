import './App.css'

function App() {

  return (
    <>
    <header className='site-header'>
      <div className="navbar">
        <a href="/" className='brand'>
          Zakelyk
        </a>
        
        <div className='nav-links'>
          <a href="#home">Home</a> 
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contacts">Contacts</a>
        </div>      
      </div>
    </header>

    <main>
     <section className='hero'>
      <div className='hero-content'>
        <p className='eyebrow'>
          TECHNOLOGY & ENGINEERING
        </p>
        <h1>
          Building systems.
          <span> Solving real problems.</span>
        </h1>
        <p className='descriptions'>
          A collection of projects and experiments around
          software, networking, infrastructure, and
          connected systems.
        </p>
        <div className='hero-actions'>
          <a href='#projects'>Explore Projects</a>
          <a href='#'>View on Github</a>
        </div>
      </div>
      <div className='terminal-panel'>
        terminal panel
      </div>
     </section>
    </main>
    </>
    
  )
}

export default App
