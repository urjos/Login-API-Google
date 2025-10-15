import Gallery from "../../../components/layouts/UI/Gallery";

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
