import { useState, type FormEvent } from "react";
import { useSession } from "../../../contexts/SessionContext";
import { api } from "../../../services/api";
import ErrorMessage from "../../../components/layouts/Error";
import SuccessMessage from "../../../components/layouts/Success";

export const ProfileBody = () => {
  const { session, setSession } = useSession();
  const [formData, setFormData] = useState({
    name: session?.name,
    email: session?.email,
    password: "",
    country: session?.country,
    confirm_password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setIsLoading(true);

    if (formData.password || formData.confirm_password) {
      if (formData.password.length < 8) {
        setError("La nueva contraseña debe tener al menos 8 caracteres.");
        setIsLoading(false);
        return;
      }
      if (formData.password !== formData.confirm_password) {
        setError("Las contraseñas no coinciden.");
        setIsLoading(false);
        return;
      }
    }

    const payload: {
      name?: string;
      email?: string;
      country?: string;
      password?: string;
    } = {
      name: formData.name,
      email: formData.email,
      country: formData.country,
    };

    if (formData.password) {
      payload.password = formData.password;
    }

    try {
      const response = await api.put(`/users/${session?.userId}`, payload);

      setSession({ ...session, ...response.data });
      setSuccess("¡Perfil actualizado con éxito!");
    } catch (err: any) {
      setError(
        err.response?.data?.message ||
          "Ocurrió un error al actualizar el perfil."
      );
    } finally {
      setIsLoading(false);
    }
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
          <form onSubmit={handleSubmit}>
            {error && (
              <ErrorMessage message={error} onClose={() => setError(null)} />
            )}
            {success && (
              <SuccessMessage
                message={success}
                onClose={() => setSuccess(null)}
              />
            )}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-5">
              <div className="mt-2">
                <label
                  htmlFor="name"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  required
                  autoComplete="name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-800 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6
                        hover:shadow-sm transition easy-in-out duration-200"
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
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-800 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 hover:shadow-sm transition easy-in-out duration-200"
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
                  autoComplete="country"
                  required
                  className="block w-full rounded-md bg-white px-2 py-1.5 text-base text-gray-800 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 hover:shadow-sm transition duration-200"
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
                  autoComplete="new-password"
                  placeholder="•••••••••"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-800 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 hover:shadow-sm transition easy-in-out duration-200"
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
                  autoComplete="new-password"
                  placeholder="•••••••••"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-800 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 hover:shadow-sm transition easy-in-out duration-200"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="mt-5 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition duration-250 cursor-pointer disabled:bg-indigo-300"
              >
                Update account
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
