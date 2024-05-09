import { HttpParams } from "../types/http-types";

export abstract class HttpUtils {
  static toURLSearchParams = <T extends HttpParams>(
    params?: T
  ): URLSearchParams | undefined => {
    if (params === undefined) {
      return undefined;
    }

    const searchParams = new URLSearchParams();

    Object.keys(params).forEach((paramKey) => {
      let value = params[paramKey];
      if (value === undefined || value === "") {
        return;
      }

      if (typeof value === "boolean") {
        value = +value;
      }

      if (Array.isArray(value)) {
        value.forEach((valueItem) => {
          searchParams.append(`${paramKey}[]`, valueItem.toString());
        });
      } else {
        searchParams.append(paramKey, value.toString());
      }
    });

    return searchParams;
  };
}
