type ButtonType = "Success" | "Danger";

type Props = {
  text: string;
  onClick: () => void;
  type: ButtonType;
};

const buildClassName = (type: ButtonType) => {
  switch (type) {
    case "Success":
      return "border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 w-36 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline";
    case "Danger":
      return "border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 w-36 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline";
  }
};

export function Button({ text, onClick, type }: Props) {
  return (
    <button onClick={onClick} className={buildClassName(type)}>
      {text}
    </button>
  );
}
