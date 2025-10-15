import { useState } from "react";
import { api } from "../../../entities/types/api";
import { useNavigate } from "react-router-dom";
import { DeleteNotification } from "../../../components/layouts/Notifications/Delete";
import { Divider } from "../../../components/layouts/Others/Divider";
import { useSessionStore } from "../../../entities/store/SessionStore";

export const DeleteUser = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { session, logout } = useSessionStore();
  const navigate = useNavigate();
  const handleDeleteAccount = async () => {
    if (!session?.userId) return;
    try {
      await api.delete(`/users/${session.userId}`);
      logout();
      navigate("/login");
    } catch (error: any) {
      console.error("Failed to delete account:", error);
      if (error.response?.status === 500) {
        logout();
        navigate("/login");
      } else {
        setIsModalOpen(false);
      }
    }
  };
  const isLocalSession = session?.auth_provider === "local";

  return (
    <>
      {isLocalSession && (
        <div className="flex min-h-full flex-col justify-center pt-8 px-6 lg:px-8">
          <Divider />
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="rounded-lg border-none p-4">
              <h3 className="text-base font-semibold leading-6 dark:text-black">
                Delete account
              </h3>
              <div className="mt-2 max-w-xl text-sm text-gray-800">
                <p>
                  Once you delete your account, you will lose all data
                  associated with it. This action cannot be undone.
                </p>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                type="button"
                className="mt-4 rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 
              transition duration-300 ease-in-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Delete account
              </button>
              <DeleteNotification
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                handleDeleteAccount={handleDeleteAccount}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
