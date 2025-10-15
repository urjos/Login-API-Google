import { useState, type ChangeEvent, type FormEvent } from "react";

type InitialState = {
  [key: string]: string;
};

export const useAuthForm = (initialState: InitialState) => {
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData(initialState);
    setError(null);
    setIsLoading(false);
  };

  return {
    formData,
    setFormData,
    error,
    setError,
    isLoading,
    setIsLoading,
    handleChange,
    resetForm,
  };
};
