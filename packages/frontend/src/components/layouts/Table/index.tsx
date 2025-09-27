import { useSession } from "../../../contexts/SessionContext";

export default function Table() {
  const { session } = useSession();

  return (
    <table className="mt-10 mb-10 w-200 text-sm text-left rtl:text-right text-gray-500 align-center">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3">
            Name
          </th>
          <th scope="col" className="px-6 py-3">
            Email
          </th>
          <th scope="col" className="px-6 py-3">
            Username
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
            {session?.name}
          </th>
          <td className="px-6 py-4">{session?.email}</td>
          <td className="px-6 py-4">{session?.username}</td>
          <td className="px-6 py-4">{session?.userId}</td>
        </tr>
      </tbody>
    </table>
  );
}
