import React from 'react';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <main>
      <h1 className="text-xl">Dashboard/ new Companies</h1>
      <div>Some edditional info</div>
    </main>
  );
}
