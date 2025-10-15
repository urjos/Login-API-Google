import Gallery from "../../../components/layouts/Others/Gallery";

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
