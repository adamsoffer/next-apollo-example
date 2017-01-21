export default (props) => (
  <main>
    {props.children}
    <footer>
      Made by <a href='http://twitter.com/adamSoffer'>@adamSoffer</a>
    </footer>
    <style jsx global>{`
      * {
        font-family: Menlo, Monaco, "Lucida Console", "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New", monospace, serif;
      }
      body {
        margin: 0;
        padding: 25px 50px;
      }
      a {
        color: #22BAD9;
      }
      footer {
        background-color: rgba(255, 255, 255, .95);
        bottom: 0;
        font-size: 12px;
        left: 0;
        padding: 15px 0;
        position: fixed;
        text-align: center;
        width: 100%;
      }
      p {
        font-size: 14px;
        line-height: 24px;
      }
      article {
        margin: 0 auto;
        max-width: 650px;
      }
      button {
        align-items: center;
        background-color: #22BAD9;
        border: 0;
        color: white;
        display: flex;
        padding: 5px 7px;
        transition: background-color .3s;
      }
      button:active {
        background-color: #1B9DB7;
        transition: background-color .3s
      }
      button:focus {
        outline: none;
      }
    `}</style>
  </main>
)
