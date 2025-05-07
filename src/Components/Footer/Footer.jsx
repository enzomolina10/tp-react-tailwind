import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-6 dark:bg-gradient-to-r dark:from-blue-800 dark:to-blue-900">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-start space-y-6 md:space-y-0">
        <section className="flex-1 text-center px-4">
          <h2 className="text-lg font-bold">{t("footer.contact")}</h2>
          <p>Email: contacto@grupo7.com</p>
          <p>{t("footer.phone")}: +54 299 456 789</p>
        </section>
        <section className="flex-1 text-center px-4">
          <h2 className="text-lg font-bold">{t("footer.aboutTitle")}</h2>
          <p>
            {t("footer.aboutText1")}
            <br />
            {t("footer.aboutText2")}
          </p>
        </section>
        <section className="flex-1 text-center px-4">
          <h2 className="text-lg font-bold">{t("footer.title")}</h2>
          <p>
            <strong>{t("footer.question1")}</strong> <br />
            {t("footer.answer1")}
          </p>
          <p>
            <strong>{t("footer.question2")}</strong> <br />
            {t("footer.answer2")}
          </p>
        </section>
      </div>
      <div className="container mx-auto text-center mt-6 scale-110">
        <p className="text-lg">{t("footer.copyright")}</p>
        <p className="text-lg">
          {t("footer.follow")}{" "}
          <a
            href="https://www.facebook.com/"
            className="text-blue-100 hover:underline inline-flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0h-21.35C.599 0 0 .6 0 1.326v21.348C0 23.4.599 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24h-1.917c-1.504 0-1.796.715-1.796 1.763v2.31h3.59l-.467 3.622h-3.123V24h6.116c.727 0 1.326-.6 1.326-1.326V1.326C24 .6 23.401 0 22.675 0z" />
            </svg>
            Facebook
          </a>{" "}
          {t("footer.and")}{" "}
          <a
            href="https://github.com/enzomolina10/tp-react-tailwind"
            target="_blank"
            className="text-blue-100 hover:underline inline-flex items-center"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.468-2.382 1.236-3.221-.124-.303-.536-1.523.116-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.241 2.873.118 3.176.77.839 1.234 1.911 1.234 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
