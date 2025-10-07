import Gallery from "../../../components/layouts/Gallery";

export type LogoutProps = {
  onLogout: () => void;
};

export function Body() {
  return (
    <>
      <Gallery />
    </>
  );
}
