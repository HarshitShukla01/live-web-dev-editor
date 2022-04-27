import React, { useState, useEffect } from 'react';
import EditorPlain from './EditorPlain'
import useLocalStorage from './editorhelp'
import './editorstyle.css'

const Editor_main = () => {
  const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  const [js, setJs] = useLocalStorage('js', '')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
          <style>${css}</style>
      </head>
      <body>${html}</body>
      <script>${js}</script>
      </html>
      `)
    
    }, 450)

    return () => clearTimeout(timeout)
  }, [html, css, js])

return (
<>
  <div className="editor_pane editor_top-pane">
    <EditorPlain language="xml" displayName="HTML" value={html} onChange={setHtml}/>
    <EditorPlain language="css" displayName="CSS" value={css} onChange={setCss}/>
    <EditorPlain language="javascript" displayName="JS" value={js} onChange={setJs}/>
  </div>
  <div className="editor_pane">
    <iframe
      id="editor_iframe"
      srcDoc={srcDoc}
      title="output"
      sandbox="allow-scripts"
      frameBorder="0"
      width="100%"
      height="100%"
    />
  </div>
</>
)
}

export default Editor_main;