import logo from './logo.svg';
import './App.css';
import Pdf from './Pdf';
import PdfViewer from './PdfViewer';
import PdfJs from './PdfJs';
import PdfViewOnly from './PdfViewOnly';

function App() {
  return (
    <div className="App">
      {/* <Pdf/> */}
      <PdfViewer/>
      {/* <PdfViewOnly/> */}
      {/* <PdfJs/> */}
      {/* <PdfNextCanvas/> */}
    </div>
  );
}

export default App;
