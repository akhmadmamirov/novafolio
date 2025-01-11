import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { UseFirebase } from '../hooks/hooks';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const {auth} = UseFirebase()
  const router = useRouter(); 

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Login successful!');
      router.push('/admin'); 
    } catch (error) {
      console.log(error)
      toast.error('Wrong email or password.');
      setEmail("")
      setPassword("")
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-sm p-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-[#a770ad] mb-6">Editor Login</h2>
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-200">
              Email
            </label>
              <input
                type="email"
                id="email"
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="w-full px-4 py-2 mt-1 text-gray-800 bg-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-200">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password"
                required
                className="w-full px-4 py-2 mt-1 text-gray-800 bg-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 focus:outline-none"
            >
              Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
