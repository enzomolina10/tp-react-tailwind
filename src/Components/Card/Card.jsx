import Button from "../Button/Button";

const Card = ({ text, onClick }) => {
  const handleAddToFavorites = () => {
    // Aquí iría la lógica para añadir a favoritos
    console.log("Añadido a favoritos:", text.substring(0, 20) + "...");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 px-4 bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl w-full">
        <div className="prose max-w-none mb-6">
          <h2 className="text-2xl font-semibold mb-4">Cuento</h2>
          <div className="text-gray-700 whitespace-pre-line overflow-y-auto max-h-96">
            {text}
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <Button 
            text={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            }
            onClick={handleAddToFavorites}
            className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition duration-200 flex items-center justify-center w-10 h-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
