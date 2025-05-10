import React from 'react';

export default function CommunityPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Community</h1>
      <p className="text-lg mb-4">
        Welcome to the Portique community page. This section is currently under development.
      </p>
      <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-3">Coming Soon</h2>
        <p>
          We are working on building a vibrant community space where you can:
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li>Connect with other portfolio creators</li>
          <li>Share your templates and designs</li>
          <li>Get feedback on your portfolio</li>
          <li>Discover trending portfolio styles</li>
        </ul>
      </div>
    </div>
  );
}
