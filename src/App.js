import logo from './logo.svg';
import './App.css';
import Pdf from './Pdf';
import PdfViewer from './PdfViewer';
import PdfJs from './PdfJs';
import PdfViewOnly from './PdfViewOnly';
import PdfEditor from './MyPDFViewer';
import MyPDFViewer from './MyPDFViewer';
import PdfInputView from './PdfInputView';

function App() {
  return (
    <div className="App">
      {/* <Pdf/> */}
      {/* <MyPDFViewer pdfUrl="https://www.who.int/health-topics/coronavirus/who-coronavirus-disease-dashboard-novel-coronavirus-landscape-covid-19-vaccine-timeline.pdf?ua=1" /> */}
      {/* <PdfViewer/>
       */}
       <PdfInputView/>
      {/* <PdfViewOnly/> */}
      {/* <PdfJs/> */}
      {/* <PdfNextCanvas/> */}
    </div>
  );
}

export default App;
