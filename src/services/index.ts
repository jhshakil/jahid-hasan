"use server";

import { envConfig } from "@/config/envConfig";
import { toast } from "sonner";

export const getProfileData = async () => {
  try {
    const res = await fetch(`${envConfig.baseUrl}/profile`);

    return res.json();
  } catch (error) {
    toast("something went wrong");
    console.log(error);
  }
};

export const getExperienceData = async () => {
  try {
    const res = await fetch(`${envConfig.baseUrl}/experience`);

    return res.json();
  } catch (error) {
    toast("something went wrong");
    console.log(error);
  }
};
export const getSocialData = async () => {
  try {
    const res = await fetch(`${envConfig.baseUrl}/social`);

    return res.json();
  } catch (error) {
    toast("something went wrong");
    console.log(error);
  }
};
