import { X } from "lucide-react";
import LoginForm from "../_components/Form";

export default async function Home() {
  return (
    <div className="sm:max-w-full md:max-w-full">
      <button className="absolute top-0 right-0 h-8 w-8">
        <X className="h-5 w-5 text-gray-500" />
      </button>

      <div className="mt-0 px-8 md:mt-16 md:px-12">
        <h1>Get Started Now</h1>
        <p className="text-secondary-50 text-sm">Let’s create your account</p>
        <LoginForm type="signup" />
      </div>
    </div>
  );
}
