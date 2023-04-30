const GlobalError = ({ error, reset }) => (
  <html>
    <head>
      <title>Something wrong</title>
    </head>
    <body>
      <h1>Error</h1>
      <h4>{error.message}</h4>
      <button onClick={() => reset()}>Try again!</button>
    </body>
  </html>
);

export default GlobalError;
