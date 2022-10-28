import './App.css';
import Producto from './componentes/Producto';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Catálogo de Produtos y Servicios de DevScriptTeam</h1>
        <Producto
          nombre='iPhone 14'
          marca='Apple Ultra Gran Angular'
          imagen='iPhone14'
          descripcion='Fotos macro más nítidas y brillantes 13 mm, Ángulo de visión de 120°
          Apertura de ƒ/2.2, 100% Focus Pixels, Lente de 6 elementos, Corrección de lente'
          precio='US $2,709.95' />
           <Producto
          nombre='MacOs 11Big Sur'
          marca='Apple'
          imagen='MacOs Big Sur'
          descripcion='Sistema operativo de escritorio de Apple para computadoras Macintosh. Si estás actualizando desde macOS Sierra o una versión posterior, requiere 35,5 GB de almacenamiento disponible. Si estás actualizando desde una versión anterior, requiere hasta 44.5 GB de almacenamiento disponible'
          precio='US $999' />
           <Producto
          nombre='Watch Series 8'
          marca='Apple'
          imagen='Watch8'
          descripcion='Caja de 45 o 41 mm, diseñado para nadar, certificación IP6X de resistencia al polvo, pantalla Retina siempre activa hasta 1.000 nits, App Oxígeno en Sangre, App ECG, Notificaciones de frecuencia cardiaca y ritmo cardiaco irregular, Sensor de temperatura, control del ciclo con estimaciones retrospectivas de ovulación, emergencia SOS, llamadas de emergencia en el extranjero, detección de Caídas y Choques, disponible con conexión celular'
          precio='US $499' />
      </div>
    </div>
  );
}

export default App;
