// app/(routes)/pantry/page.tsx
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import DashboardHome from "@/components/DashboardHome";

export default async function PantryPage() {
  // Check if user is logged in
  const cookieStore = await cookies();
  const session = cookieStore.get("sp_session");
  
  // Redirect to login if not authenticated
  if (!session) {
    redirect("/login");
  }

  return <DashboardHome />;
}