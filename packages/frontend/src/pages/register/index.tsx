import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useSession } from "../../contexts/SessionContext";
import { api } from "../../services/api/index";
import ErrorMessage from "../../components/layouts/Error/index";

export const RegisterForm = () => {
  const { session, setSession } = useSession();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    country: "",
    password: "",
    confirm_password: "",
  });
  const [error, setError] = useState<string | null>(null);

  if (session) navigate("/");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const { name, lastName, email, country, password, confirm_password } =
      formData;
    if (
      !name ||
      !lastName ||
      !email ||
      !country ||
      !password ||
      !confirm_password
    ) {
      setError("Por favor, completa todos los campos requeridos.");
      return;
    }

    if (formData.password.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres.");
      return;
    }

    if (formData.password !== formData.confirm_password) {
      setError("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
      return;
    }

    try {
      const response = await api.post("/users", {
        name: `${formData.name} ${formData.lastName}`,
        email: formData.email,
        password: formData.password,
        country: formData.country,
      });

      setSession({
        name: response.data.name,
        email: response.data.email,
        userId: response.data.id,
        username: formData.name, // O podrías usar el nombre completo
        country: response.data.country,
        token: "fake-jwt-token-after-register", // El backend debería generar y devolver esto
      });

      navigate("/");
    } catch (err: any) {
      console.error("Error during registration:", err);
      setError(err.response?.data?.message || "Ocurrió un error inesperado.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-10 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-7 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Create your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
        <form onSubmit={handleSubmit} className="space-y-3">
          {error && (
            <ErrorMessage message={error} onClose={() => setError(null)} />
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="mt-2">
              <label
                htmlFor="name"
                className="block text-sm/6 font-medium text-gray-900"
              >
                First Name
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                required
                autoComplete="name"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6
                hover:shadow-sm transition easy-in-out duration-200"
              />
            </div>

            <div className="mt-2">
              <label
                htmlFor="lastName"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Last name
              </label>
              <input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                type="text"
                required
                autoComplete="family-name"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 hover:shadow-sm transition easy-in-out duration-200"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="mt-2 col-span-2">
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                required
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 hover:shadow-sm transition easy-in-out duration-200"
              />
            </div>
            <div className="mt-2 col-span-1">
              <label
                htmlFor="country"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Country
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="block w-full rounded-md bg-white px-2 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 hover:shadow-sm transition duration-200"
              >
                <option value="" disabled></option>
                <option value="USA">United States</option>
                <option value="Canada">Canada</option>
                <option value="Mexico">Mexico</option>
                <option value="UK">United Kingdom</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                <option value="India">India</option>
                <option value="China">China</option>
                <option value="Japan">Japan</option>
                <option value="Australia">Australia</option>
              </select>
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
              <div className="text-sm"></div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                type="password"
                required
                autoComplete="current-password"
                placeholder="•••••••••"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 hover:shadow-sm transition easy-in-out duration-200"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="confirm_password"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Confirm Password
              </label>
              <div className="text-sm"></div>
            </div>
            <div className="mt-2">
              <input
                id="confirm_password"
                name="confirm_password"
                value={formData.confirm_password}
                onChange={handleChange}
                type="password"
                required
                autoComplete="current-password"
                placeholder="•••••••••"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 hover:shadow-sm transition easy-in-out duration-200"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="mt-5 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition duration-250 cursor-pointer"
            >
              Create account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
