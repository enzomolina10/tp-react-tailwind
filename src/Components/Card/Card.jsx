import Button from "../Button/Button";
import { useTranslation } from "react-i18next";

const Card = ({
  title,
  text,
  image,
  className,
  onClickFav,
  onDetails,
  hideButtons = false,
  translation1,
  translation2,
}) => {
  const { t } = useTranslation();
  className =
    className === ""
      ? className
      : "flex flex-col items-center justify-center py-8 px-6 bg-amber-50";

  return (
    <div className={className}>
      <div className="bg-gray-50 shadow-xl rounded-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 max-w-4xl w-full p-4">
        <div className="flex flex-row gap-6">
          {/* FOTO */}
          {image && (
            <div className="flex-shrink-0 w-48 h-64 overflow-hidden border border-gray-300">
              <img
                src={image}
                alt={typeof title === "string" ? t(title) : title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
  
          {/* CONTENIDO */}
          <div className="flex flex-col justify-between flex-grow">
            <div>
              <h2 className="text-2xl font-semibold text-center border-b border-amber-300 pb-2 mb-4">
                {typeof title === "string" ? t(title) : title}
              </h2>
              <div className="text-gray-700 whitespace-pre-line overflow-y-auto max-h-60 leading-relaxed px-2">
                {typeof text === "string" ? t(text) : text}
              </div>
            </div>
  
            {!hideButtons && (
              <div className="flex justify-between items-center mt-6">
                {/* BOTÓN FAVORITO */}
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
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200"
                />
  
                {/* BOTÓN AUTOR / DETALLES */}
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
                  onClick={onDetails}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default Card;
