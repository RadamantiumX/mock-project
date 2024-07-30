import { Dispatch, SetStateAction } from "react";

interface Props {
  type: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  payload: string;
  setPayload: Dispatch<SetStateAction<string>>;
  setField: Dispatch<SetStateAction<string>>;
  field: string;
}

export const InputForm: React.FC<Props> = ({ type, handleSubmit, payload, setPayload, setField, field }) => {
  const handleSvgClick = () => {
    const formElement = document.querySelector("form");
    if (formElement) {
      const event = new Event("submit", { cancelable: true, bubbles: true });
      formElement.dispatchEvent(event);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type={type}
          value={payload}
          onChange={(e) => {
            setPayload(e.target.value);
            setField(field);
          }}
          className="border rounded-md"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ml-3 cursor-pointer"
          onClick={handleSvgClick}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747" />
          <path d="M20 4v5h-5" />
        </svg>
      </form>
    </div>
  );
};
