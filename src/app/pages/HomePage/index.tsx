import { useEffect } from "react";
import { Page } from "../../components/shared/page";
import { WorkInProgress } from "../../components/work-in-progress";

import "./style.scss";
import { getNewReleases, homeSelectors } from "../../../store/home";
import { useAppDispatch } from "../../..";
import { useSelector } from "react-redux";

export const HomePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch(getNewReleases({ page: 0, page_size: 10 }));
  }, []);

  const newReleases = useSelector(homeSelectors.selectNewReleases);

  return (
    <Page title="Home">
      <div className={"home-page"}>
        <WorkInProgress></WorkInProgress>
      </div>
    </Page>
  );
};
