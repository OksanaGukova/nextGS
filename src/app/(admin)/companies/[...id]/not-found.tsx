'use client';
import Link from 'next/link';
import React from 'react';

export interface NotFoundProps {}

export default function NotFound({}: NotFoundProps) {
  return (
    <div>
      <p>could not found company</p>
      <Link className="text blue-500" href="/companies">
        Back to companies
      </Link>
    </div>
  );
}
