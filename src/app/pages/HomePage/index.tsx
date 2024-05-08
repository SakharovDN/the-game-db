import { Page } from "../../components/shared/page";
import { WorkInProgress } from "../../components/work-in-progress";

import "./style.scss";

export const HomePage = () => {
  return (
    <Page title="Home">
      <div className={"home-page"}>
        <WorkInProgress></WorkInProgress>
      </div>
    </Page>
  );
};
