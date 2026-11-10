import './App.css'

function App() {

  return (
    <>
    <header className='site-header'>
      <div className="navbar">
        <a href="/" className='brand'>Zakelyk</a>
        
        <div className='nav-links'>
          <a href="#home">Home</a> 
          <a href="https://github.com/zakelyk?tab=repositories">Projects</a>
          <a href="#about">About</a>
          <a href="#contacts">Contacts</a>
        </div>      
      </div>
    </header>

    <main>
     <section className='hero'>
      <div className='hero-content'>
        <p className='eyebrow'>◆TECHNOLOGY & ENGINEERING</p>
        <h1>
          Building systems. <br/>
          <span> Solving real problems.</span>
        </h1>
        <p className='descriptions'>
          A collection of projects and experiments around
          software, networking, infrastructure, and
          connected systems.
        </p>
        <div className='hero-actions'>
          <a href='https://github.com/zakelyk?tab=repositories' className='btn-primary'>Explore Projects ↗</a>
          <a href='https://github.com/zakelyk'className='btn-secondary'>View on Github ↗</a>
        </div>
      </div>
      <div className='terminal-panel'>
        
        <div className='terminal-header'>
          <div className='terminal-dots'>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span className='terminal-tittle'>zakelyk@profile:~</span>
        </div>

        <div className='terminal-body'>
          <div className='terminal-line'>
            <span className='prompt'>$</span> whoami
          </div>
          <div className='terminal-output'>
            01. Network Infrastructure
          </div>
          <div className='terminal-output'>
            02. Linux & System Administration
          </div>
          <div className='terminal-output'>
            03. Internet of Things
          </div>
          <div className='terminal-output'>
            04. Self-hosted Services
          </div>
        </div>
      </div>
     </section>
    </main>
    </>
  )
}

export default App
