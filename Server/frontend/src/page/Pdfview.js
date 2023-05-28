import React, { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf'



export default function Pdfview() {

    const [pdfData, setPdfData] = useState(null);
    useEffect(() => {
        setPdfData(sessionStorage.getItem("pdflink"));
    }, []);

    return (
        <div>
            {pdfData ? (
                <Document file={pdfData}>
                    <Page pageNumber={1} />
                </Document>
            ) : (
                <p>Loading PDF...</p>
            )}
        </div>
    )
}
