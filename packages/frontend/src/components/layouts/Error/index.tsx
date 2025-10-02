export type ErrorMessageProps = {
  message: string | null;
};

export default function ErrorMessage({ message }: ErrorMessageProps) {
  if (!message) return null;
  return <p className="mt-2 text-sm text-red-600">{message}</p>;
}
