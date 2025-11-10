// app/(routes)/dashboard/page.tsx
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Dashboard from "@/components/Dashboard";

export default async function DashboardPage() {
  // Check if user is logged in
  const cookieStore = await cookies();
  const session = cookieStore.get("sp_session");
  
  // Redirect to login if not authenticated
  if (!session) {
    redirect("/login");
  }

  return <Dashboard />;
}

