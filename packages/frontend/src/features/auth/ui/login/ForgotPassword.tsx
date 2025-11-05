import { type FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../../../entities/types/api";
import { useAuthForm } from "../../model/AuthHook";
import Notification from "../../../../components/layouts/Notifications/State";
import { useSessionStore } from "../../../../entities/store/SessionStore";

export const ForgotPasswordForm = () => {
  const { session } = useSessionStore();
  const navigate = useNavigate();
  const { formData, error, setError, isLoading, setIsLoading, handleChange } =
    useAuthForm({
      email: "",
    });

  const [success, setSuccess] = useState<string | null>(null);

  if (session) navigate("/");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setIsLoading(true);

    try {
      const response = await api.post("/auth/request-password-reset", {
        email: formData.email,
      });

      setSuccess(response.data.message);
    } catch (err: any) {
      setError(
        err.response?.data?.message || "Ocurrió un error al enviar el email."
      );
    } finally {
      setIsLoading(false);
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
          Forgot your password?
        </h2>
        <p className="mt-4 text-center text-sm text-gray-500">
          Don't worry. Enter your email address and we'll send you a code.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
        {success && (
          <Notification
            message={success}
            onClose={() => setSuccess(null)}
            variant="success"
          />
        )}
        {error && (
          <Notification
            message={error}
            onClose={() => setError(null)}
            variant="error"
          />
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email address"
                required
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1  placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2  sm:text-sm/6 ${
                  error
                    ? "outline-red-500 outline-2 focus:outline-red-500"
                    : "outline-gray-300 focus:outline-indigo-600"
                }`}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-indigo-400"
            >
              {isLoading ? "Sending" : "Send code"}
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm/6 text-gray-500">
          Have you remembered yet?{" "}
          <Link
            to="/login"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};
