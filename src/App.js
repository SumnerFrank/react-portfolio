import React, { useState } from 'react';
import Nav from './components/Nav';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Resume from './components/Resume';

function App() {
const [page, setPage] = useState(<About/>)
  return (
    <div>
      <Nav
      setPage={setPage}
      Contact={Contact}
      About={About}
      Projects={Projects}
      Resume={Resume}
      />
      {page}
      <Footer
      setPage = {setPage}
      Contact={Contact}
      About={About}
      />
    </div>
  );
}

// this version would have all components on one main page
// while this would be cool, it is not what the assignment is asking for 
// function App() {
//   return(
//     <div>
//       <Nav />
//       <About />
//       <Projects />
//       <Resume />
//       <Footer />
//     </div>
//   )
// }

export default App;
