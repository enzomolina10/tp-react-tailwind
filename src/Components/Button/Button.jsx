const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      class="rounded-[10px] bg-blue-500 transition delay-20 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 "
    >
      {text}
    </button>
  );
};
export default Button;
