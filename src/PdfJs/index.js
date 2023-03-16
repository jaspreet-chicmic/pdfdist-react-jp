import React from 'react'
import "./styles.css";

function PdfJs() {
    // If absolute URL from the remote server is provided, configure the CORS
    // header on that server.
    var url = 'https://drive.google.com/file/d/1QagaBdSyz148YbgX87b6ldMoJ7_zYFtW/view?usp=sharing';

    // Loaded via <script> tag, create shortcut to access PDF.js exports.
    var pdfjsLib = window['pdfjs-dist/build/pdf'];

    // The workerSrc property shall be specified.
    pdfjsLib.GlobalWorkerOptions.workerSrc = '//pdf.js/build/pdf.worker.js';

    // Asynchronous download of PDF
    var loadingTask = pdfjsLib.getDocument(url);
    loadingTask.promise.then(function(pdf) {
        console.log('PDF loaded');
        // /pdf.worker.min.js
        // Fetch the first page
        var pageNumber = 1;
        pdf.getPage(pageNumber).then(function(page) {
            console.log('Page loaded');
            
            var scale = 1.5;
            var viewport = page.getViewport({scale: scale});

            // Prepare canvas using PDF page dimensions
            var canvas = document.getElementById('the-canvas');
            var context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            // Render PDF page into canvas context
            var renderContext = {
            canvasContext: context,
            viewport: viewport
            };
            var renderTask = page.render(renderContext);
            renderTask.promise.then(function () {
            console.log('Page rendered');
            });
        });
        }, function (reason) {
        // PDF loading error
        console.error(reason);
    });
    
    return (
        <>
            <canvas id="the-canvas"></canvas>
            <div>PdfJS</div>
            <h1>PDF.js 'Hello, base64!' example</h1>
        </>
    )
}

export default PdfJs