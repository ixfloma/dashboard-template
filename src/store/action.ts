import { ThunkActionType } from "@src/typings/redux";
export const handleInitialLoad = (): ThunkActionType => async (dispatch) => {
  try {
    console.log("initial load");
  } catch (err: unknown) {
    if (err instanceof Error) {
    }
  } finally {
  }
};
