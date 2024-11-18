


import Header from '@/app/components/header';
import React from 'react'



export interface PageProps{
  params: { id: string[] };
}



export default function Page({params}: PageProps) {
  return (
    <div>
      <Header>Companies ({String(params.id)})</Header>
      <p>{ new Date().toTimeString()}</p>
    </div>
  );
}
