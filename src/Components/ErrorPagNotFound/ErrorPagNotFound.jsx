import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

const ErrorPagNotFound = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

return (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
    <div className="text-center">
      <h1 className="text-9xl font-bold text-blue-600 dark:text-blue-400">
        404
      </h1>
      <h2 className="text-4xl font-semibold mt-4 text-gray-800 dark:text-white">
        {t("errorPagNotFound.title")}
      </h2>
      <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
        {t("errorPagNotFound.message")}
      </p>

      <div className="mt-10">
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 dark:bg-blue-700 dark:hover:bg-blue-600"
        >
          {t("errorPagNotFound.backToHome")}
        </button>
      </div>
    </div>

    <div className="mt-12">
      <img
        src="https://i.pinimg.com/originals/ee/27/70/ee2770186623c96929d17b75f731d37e.gif"
        className="w-128 h-128"
      />
    </div>
  </div>
);
};

export default ErrorPagNotFound;
