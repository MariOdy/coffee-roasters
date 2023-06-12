import PageBanner from "@/components/PageBanner";

import styles from "./styles.module.css";

const SubscribePage = () => {
  return (
    <div className="flex flex-col gap-20 ">
      <PageBanner
        pageTitle="Create plan"
        pageDescription="Coffee the way you wanted it to be. For coffee delivered tomorrow, or next week. For whatever brew method you use. For choice, for convenience, for quality."
      />
      
    </div>
  );
};
export default SubscribePage;
