'use client';
import React from 'react';

export interface GlobalErrorProps {}

export default function GlobalError({}: GlobalErrorProps) {
  return (
    <html>
      <body>
        <div>
          <p>something globaly went vrong</p>
        </div>
      </body>
    </html>
  );
}
