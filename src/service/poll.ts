import useAPICall from "@/composables/useAPICall";
import {
  IOptionsReturn,
  IuseAPICallNoParams,
  IuseAPICallWithPayload,
  ICreatePollPayload,
  IOption,
} from "@/types";
import {
  binaryPollWithTimeLimit,
  selectPollWithTimeLimit,
  meterPollWithTimeLimit,
  binaryPollOptions,
  meterPollOptions,
  selectPollOptions,
} from "@/data/index";

export const getPollByIdService = (
  pollId: string
): IuseAPICallNoParams<IOptionsReturn> => {
  const { isLoading, call: apiCall } = useAPICall<IOptionsReturn>({
    method: "GET",
    url: `/poll/${pollId}`,
  });
  const call = () => apiCall(meterPollWithTimeLimit);
  return { isLoading, call };
};

export const getPollOptionsByIdService = (
  pollId: string
): IuseAPICallNoParams<IOption[]> => {
  const { isLoading, call: apiCall } = useAPICall<IOption[]>({
    method: "GET",
    url: `/poll/${pollId}/options`,
  });
  const call = () => apiCall(meterPollOptions);
  return { isLoading, call };
};

export const createPollService = (): IuseAPICallWithPayload<
  IOptionsReturn,
  ICreatePollPayload
> => {
  const { isLoading, call: apiCall } = useAPICall<
    IOptionsReturn,
    ICreatePollPayload
  >({
    method: "POST",
    url: `/poll/`,
  });
  const call = (payload: ICreatePollPayload) =>
    apiCall(binaryPollWithTimeLimit, payload);
  return { isLoading, call };
};
