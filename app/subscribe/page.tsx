import PageBanner from "@/components/PageBanner";
import HowItWorks from "@/components/HowItWorks";

import styles from "./styles.module.css";

const SubscribePage = () => {
  return (
    <div className="flex flex-col gap-12 ">
      <PageBanner
        pageTitle="Create plan"
        pageDescription="Coffee the way you wanted it to be. For coffee delivered tomorrow, or next week. For whatever brew method you use. For choice, for convenience, for quality."
      />
      <HowItWorks theme="dark" />
    </div>
  );
};
export default SubscribePage;
