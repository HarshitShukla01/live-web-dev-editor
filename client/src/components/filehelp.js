const fileDownload = require('js-file-download');

const dataGather = () =>{
    const html1 = localStorage.getItem('codepen-clone-html')
    const css1 = localStorage.getItem('codepen-clone-css')
    const js1 = localStorage.getItem('codepen-clone-js')
    
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
    console.log(html)
    console.log(css)
    console.log(js)
    
    return result;
}

export const downloadInstantData = () =>{
    const data = dataGather();
    fileDownload(data, 'index.html');
}

