import { withAuth } from "@/components/auth/Protect";
import { useRouter } from 'next/navigation';
import { UseFirebase } from "./hooks/hooks";
import { toast } from 'react-toastify';
import ImageUpload from "./ImageUpload";

const AdminEditor = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const {auth} = UseFirebase();
      await auth.signOut();
      toast.success('Logged out successfully');
      router.push('/login');
    } catch (error) {
      console.log(error)
      toast.error('Error logging out');
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin Editor</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 font-bold text-white bg-red-500 rounded-lg hover:bg-red-600 focus:ring-4 focus:ring-red-300 focus:outline-none"
        >
          Logout
        </button>
      </div>
      <ImageUpload folder="images"/>
    </div>
  );
};

export default withAuth(AdminEditor);