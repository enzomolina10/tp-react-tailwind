import { useTranslation } from "react-i18next";

const Input = ({ onChange }) => {
  const { t } = useTranslation();
  return (
    <div class="flex justify-center">
      <input
        class="focus:outline-none py-2 px-2 font-semibold text-base bg-blue-100 text-blue-700 rounded-lg border border-blue-200 hover:bg-blue-200 hover:text-blue-900 transition-colors duration-200 w-150"
        type="search"
        placeholder={t("header.search")}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
