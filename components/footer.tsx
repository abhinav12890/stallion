import React from "react";

export default function Footer() {
  return (
    <footer className="mb-1 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2023 Stallion Technologies. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built by Abhinav Kumar with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
      <div className="mt-auto bg-black text-white py-2">
        <p className="text-sm">Coming Soon</p>
      </div>
    </footer>
  );
}
