"use client";

export default function GlobalError({ error }: { error: Error }) {
  return (
    <html>
      <body>
        <h2>Global Error</h2>
      </body>
    </html>
  );
}
