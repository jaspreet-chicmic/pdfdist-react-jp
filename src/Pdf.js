// pages/index.js
import ReactDOM from 'react-dom/client';
import {_isValidProtocol} from "pdfjs-dist"
import React, { useEffect, useRef } from 'react';
//  ~/Downloads/ChicMicTrip.pdf
const PDFJS = window.pdfjsLib;
export default function Pdf() {
	const canvasRef = useRef(null);
    // const pdfJS = import('pdfjs-dist/build/pdf');
    // console.log(pdfJS._isValidProtocol("/home/chicmic/Documents/Pdf/PDF/pdf-react-application/src/logo.svg"))
    
    // pages/index.js

    //  ~/Downloads/ChicMicTrip.pdf
	useEffect(() => {
		(async function () {
			// We import this here so that it's only loaded during client-side rendering.
			const pdfJS = await import('pdfjs-dist/build/pdf');
            console.log(pdfJS, pdfJS.isPdfFile("ChicMicTrip.pdf"))
            pdfJS.GlobalWorkerOptions.workerSrc =
            "//pdfjs-dist/build/pdf.worker.min.js";
			console.log("workerSrc ",pdfJS.GlobalWorkerOptions.workerSrc)

            pdfJS.GlobalWorkerOptions.workerSrc =
				window.location.origin + '/pdf.worker.min.js';
            
			console.log("pdfJS.getDocument('ChicMicTrip.pdf') : ",pdfJS)
			// const pdf = await pdfJS.getDocument('ChicMicTrip.pdf').promise;

			// const page = await pdf.getPage(1);
			// const viewport = page.getViewport({ scale: 1.5 });

			// // Prepare canvas using PDF page dimensions.
			// const canvas = canvasRef.current;
			// const canvasContext = canvas.getContext('2d');
			// canvas.height = viewport.height;
			// canvas.width = viewport.width;

			// Render PDF page into canvas context.
			// const renderContext = { canvasContext, viewport };
			// page.render(renderContext);
            
            // console.log(pdfJS.isPdfFile("ChicMicTrip.pdf"),"LLLLLL", await pdfJS.getDocument("https://drive.google.com/file/d/1wphA65hG89faH_Uef3UenI5VORLswbUB/view?usp=sharing").promise);
            // console.log(pdfJS,"pdfJS", window.location.origin + '/pdf.worker.min.js')
			// const pdf = pdfJS.getDocument("https://drive.google.com/file/d/1wphA65hG89faH_Uef3UenI5VORLswbUB/view?usp=sharing");
            // console.log("DDDD")

			// const page = await pdf.getPage(1);
			// const viewport = page.getViewport({ scale: 1.5 });

			// // Prepare canvas using PDF page dimensions.
			// const canvas = canvasRef.current;
			// const canvasContext = canvas.getContext('2d');
			// canvas.height = viewport.height;
			// canvas.width = viewport.width;

			// // Render PDF page into canvas context.
			// const renderContext = { canvasContext, viewport };
			// page.render(renderContext);
		})();
	}, []);

	return <canvas ref={canvasRef} style={{ height: '100vh' }} />;
}