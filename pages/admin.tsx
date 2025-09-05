import dynamic from "next/dynamic";

const AdminEditor = dynamic(() => import("@/components/AdminEditor"), { ssr: false });

export default function AdminPage() {
  return (
    <AdminEditor />
  )
}