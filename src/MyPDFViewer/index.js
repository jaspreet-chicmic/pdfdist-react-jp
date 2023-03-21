import React, { useRef, useState, useEffect } from 'react'
// import pdfjsLib from 'pdfjs-dist';
let pdfjsLib = require('pdfjs-dist');
// if (typeof window !== 'undefined') {
//   pdfjsLib = require('pdfjs-dist');
// }
// /home/chicmic/Documents/pdfdist-react-jp/node_modules/pdfjs-dist/build/pdf.worker.js
pdfjsLib.GlobalWorkerOptions.workerSrc = 'node_modules/pdfjs-dist/build/pdf.worker.js';
console.log("pdfjsLib ",pdfjsLib)

const MyPDFViewer = ({ pdfUrl }) => {
  console.log(pdfUrl," dfsa");
  const [pdfDocument, setPdfDocument] = useState(null);
  
  const loadPdf = async (url) => {
    const loadingTask = pdfjsLib.getDocument(url);
    const pdfDocument = await loadingTask.promise;
    return pdfDocument;
  };
  useEffect(() => {
    const loadPdfDocument = async () => {
      const pdf = await loadPdf(pdfUrl);
      setPdfDocument(pdf);
    };
    loadPdfDocument();
  }, [pdfUrl]);
  
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const renderPdf = async () => {
      if (!pdfDocument) return;
      
      const page = await pdfDocument.getPage(1);
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      const viewport = page.getViewport({ scale: 1 });
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      await page.render({ canvasContext: context, viewport });
    };
    renderPdf();
  }, [pdfDocument]);

  return (
    <canvas ref={canvasRef} />
  );
}
export default MyPDFViewer;

// export default PdfEditor
// import React from 'react'
// import pdfjsLib from 'pdfjs-dist'
// const url = "https://www.who.int/health-topics/coronavirus/who-coronavirus-disease-dashboard-novel-coronavirus-landscape-covid-19-vaccine-timeline.pdf?ua=1";
// function PdfEditor() {
//     pdfjsLib?.getDocument(url).promise.then(pdf => {
//         // Use pdf object to render PDF file
//         const pageNumber = 1;

//         pdf.getPage(pageNumber).then(page => {
//             const viewport = page.getViewport({ scale: 1 });
//             const annotation = new pdfjsLib.Annotation({
//               type: pdfjsLib.AnnotationType.TEXT,
//               rect: new pdfjsLib.Rectangle(10, 10, 50, 50),
//               contents: 'Example annotation'
//             });
//             annotation.setFlags(4);
//             annotation.setColor(new pdfjsLib.Color(255, 255, 0, 0.5));
//             annotation.setContents('Example annotation');
//             page.addAnnotation(annotation);
//           });

//     });
//     return (
//         <div>

//         </div>
//     )
// }

// export default PdfEditor