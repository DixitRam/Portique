import { notFound } from "next/navigation";
import ClientTemplate from "./clientTemplate";
import { getUserDetails } from "./connectDB";

// Define the PageProps interface to match project requirements
interface PageProps {
  params: Promise<{ username: string }>;
}

export default async function UserPortfolio({ params }: PageProps) {
  // Resolve the params Promise to get the username
  const resolvedParams = await params;
  const user = await getUserDetails(resolvedParams.username);
  if (!user) return notFound();

  return <ClientTemplate user={user} templateName={user.template} />;
}
