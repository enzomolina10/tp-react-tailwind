const Button = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={
        className ||
        "w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
      }
    >
      {text}
    </button>
  );
};
export default Button;
