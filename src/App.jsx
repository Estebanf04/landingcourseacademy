import Inicio from "./components/Inicio"
import PorquePrepararte from "./components/PorquePrepararte"
import ComoTrabajamos from "./components/ComoTrabajamos"
import Footer from "./components/Footer"
import Duracion from "./components/Duracion"
import Metodologias from "./components/Metodologias"
import Tecnologias from "./components/Tecnologias"
import FormularioContacto from "./components/FormularioContacto"


function App() {

  return (
    <>
      <Inicio/>

      <div className="relative">
        <PorquePrepararte/>
        <ComoTrabajamos/>
      </div>

      <Tecnologias/>

      <div className="relative">
        <Metodologias/>
        <Duracion/>
      </div>
      
      <FormularioContacto/>
      <Footer/>
    </>
  )
}

export default App
