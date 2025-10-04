import Gallery from "../../components/layouts/Gallery";
import Table from "../../components/layouts/Table";

export type LogoutProps = {
  onLogout: () => void;
};

export function Body() {
  return (
    <>
      <Table />
      <Gallery />
    </>
  );
}
