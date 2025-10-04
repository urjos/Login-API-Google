import { useSession } from "../../../contexts/SessionContext";

export default function Table() {
  const { session } = useSession();

  // Aseguramos que la sesión exista antes de intentar renderizar los datos.
  if (!session) {
    return (
      <p className="text-gray-500 text-center mt-10">
        No hay datos de sesión disponibles.
      </p>
    );
  }

  return (
    <div className="pr-10 pl-10">
      <div className="max-w-3xl mx-auto mt-10 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Country
              </th>
              <th scope="col" className="px-6 py-3">
                User ID
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b border-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {session.name}
              </th>
              <td className="px-6 py-4">{session.email}</td>
              <td className="px-6 py-4">{session.country}</td>
              <td className="px-6 py-4">{session.userId}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
