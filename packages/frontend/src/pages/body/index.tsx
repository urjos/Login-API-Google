import Gallery from "../../components/layouts/Gallery";
import Table from "../../components/layouts/Table";

export type LogoutProps = {
  onLogout: () => void;
};

export function Body() {
  return (
    <>
      <div className="flex items-center flex-col min-h-screen">
        <Table />
        <Gallery />
      </div>
    </>
  );
}
