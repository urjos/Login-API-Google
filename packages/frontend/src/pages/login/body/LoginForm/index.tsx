import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSession } from "../../../../contexts/SessionContext";
import { api } from "../../../../services/api";
import ErrorMessage from "../../../../components/layouts/Notifications/Error";

const EMAIL_ERROR_MESSAGE = "El email no está registrado";
const PASSWORD_ERROR_MESSAGE = "Contraseña incorrecta";

const LoginForm = () => {
  const { session, setSession } = useSession();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  if (session) navigate("/");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await api.post("/auth/login", formData);

      setSession({
        userId: response.data.id,
        name: response.data.name,
        email: response.data.email,
        country: response.data.country,
        token: response.data.token,
        auth_provider: response.data.auth_provider,
      });

      navigate("/");
    } catch (err: any) {
      setError(
        err.response?.data?.message ||
          EMAIL_ERROR_MESSAGE ||
          PASSWORD_ERROR_MESSAGE
      );
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-10 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Log in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        {error && (
          <ErrorMessage message={error} onClose={() => setError(null)} />
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1  placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2  sm:text-sm/6 ${
                  error === EMAIL_ERROR_MESSAGE
                    ? "outline-red-500 outline-2 focus:outline-red-500"
                    : "outline-gray-300 focus:outline-indigo-600"
                }`}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                autoComplete="current-password"
                className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 ${
                  error === PASSWORD_ERROR_MESSAGE
                    ? "outline-red-500 outline-2 focus:outline-red-500"
                    : "outline-gray-300 focus:outline-indigo-600"
                }`}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Log in
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm/6 text-gray-500">
          Don't you have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
