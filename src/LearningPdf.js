import React, { useEffect, useRef } from 'react';
import pdfjs from 'pdfjs-dist';

const LearningPdf = ({ url }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let pdfDoc = null;

    const renderPage = (pageNum) => {
      pdfDoc.getPage(pageNum).then(page => {
        const viewport = page.getViewport({ scale: 1 });
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        const renderContext = {
          canvasContext: context,
          viewport: viewport
        };
        page.render(renderContext);
      });
    };

    const loadPdf = async () => {
      const loadingTask = pdfjs.getDocument(url);
      pdfDoc = await loadingTask.promise;
      renderPage(1);
    };

    loadPdf();
  }, [url]);

  return (
    <canvas ref={canvasRef} />
  );
};

export default LearningPdf