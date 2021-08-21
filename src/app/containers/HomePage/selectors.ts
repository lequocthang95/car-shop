import { createSelector } from "reselect";
import { IRootAppState } from "../../../typings";

const selectHomePage = (state: IRootAppState) => state.homePage;

export const makeSelectTopcars = createSelector(
    selectHomePage, 
    (homePage) => homePage.topCars);