const fileDownload = require('js-file-download');

const dataFetcher = (html1,css1,js1) =>{    
    const html = JSON.parse(html1)
    const css = JSON.parse(css1)
    const js = JSON.parse(js1)

    const result = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
    </html>
    `    
    return result;
}

export const downloadProjData = (html,css,js) =>{
    const data = dataFetcher(html,css,js);
    fileDownload(data, 'index.html');
}


