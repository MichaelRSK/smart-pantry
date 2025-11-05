import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import UnderConstruction from "@/components/UnderConstruction";

export default async function ShoppingPage() {
  // Check if user is logged in
  const cookieStore = await cookies();
  const session = cookieStore.get("sp_session");
  
  // Redirect to login if not authenticated
  if (!session) {
    redirect("/login");
  }

  return (
    <div className="grid gap-4">
      <h1 className="text-2xl font-semibold">Shopping List</h1>
      <UnderConstruction note="Auto list generation coming next sprint." />
    </div>
  );
}