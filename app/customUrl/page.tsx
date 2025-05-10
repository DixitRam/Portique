'use client'

import ChangeUsernameForm from "@/components/custom/Edit_portfolio/customUrlComponent";
import { useUser } from "@clerk/nextjs";

export default function EditPortfolio() {
  const { user } = useUser();
  const userId = user?.id;

  if (!userId) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Please sign in to edit your portfolio</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">

          <ChangeUsernameForm userId={userId} />
    </div>
  );
} 