import Button from "../Button/Button";
import { useTranslation } from "react-i18next";

const Card = ({
  title,
  text,
  className,
  onClickFav,
  hideButtons = false,
  translation1,
  translation2,
}) => {
  const { t } = useTranslation();
  className =
    className === ""
      ? className
      : "flex flex-col items-center justify-center py-10 px-6 bg-amber-50";


  return (
    <div className={className}>
      <div className="bg-gray-50 shadow-2xl rounded-2xl p-8 max-w-4xl w-full border border-gray-200">
        <div className="prose max-w-none mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            {title || "Cuento"}
          </h2>
          <div className="text-gray-800 whitespace-pre-line overflow-y-auto max-h-96">
            {text}
          </div>
        </div>

        {!hideButtons && (
          <div className="flex justify-between items-center mt-3">
            <Button
              text={
                <span className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
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
                  <span>{t(translation1)}</span>
                </span>
              }
              onClick={onClickFav}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200 flex items-center justify-center"
            />
            <div className="flex-1" style={{ minWidth: "50%" }}></div>

            <Button
              text={
                <span className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>{t(translation2)}</span>
                </span>
              }
              
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200 flex items-center justify-center"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
