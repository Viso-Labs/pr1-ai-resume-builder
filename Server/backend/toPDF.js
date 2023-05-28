import { request } from "axios";

async function topdf(data){
    let source = ""

    data.forEach(element => {
        source += `<li>${element}</li>`
    });

    const options = {
        "method": "POST",
        "url": "https://api.pdfendpoint.com/v1/convert",
        "headers": {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.API_KEY}`
        },
        "data": JSON.stringify({
            "filename": "Education",
            "html": `
                <html>
                <head>
                    <title>Education</title>
                </head>
                <body>
                    <ul>
                        ${source}
                    </ul>
                </body>
                </html>
            `
        })
    };

    let output = ""
    
    await request(options)
        .then((response) => {
            //   console.log(response.data);
            output = response.data.data.url
        })
        .catch( (error) => {
            console.error(error);
        });

    return output;
}

export default topdf;