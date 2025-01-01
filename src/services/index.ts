"use server";

import { envConfig } from "@/config/envConfig";
import { toast } from "sonner";
import nexiosInstance from "../../nexios.config";
import { NexiosResponse } from "nexios-http/types/interfaces";
import {
  IResponse,
  TBlog,
  TExperience,
  TProfile,
  TProject,
  TSkill,
  TSocial,
} from "@/types";

export const getProfileData = async () => {
  try {
    const { data }: NexiosResponse<IResponse<TProfile[]>> =
      await nexiosInstance.get(`${envConfig.baseUrl}/profile`, {
        cache: "no-store",
      });

    return data;
  } catch (error) {
    toast("something went wrong");
    console.log(error);
  }
};

export const getExperienceData = async () => {
  try {
    const { data }: NexiosResponse<IResponse<TExperience[]>> =
      await nexiosInstance.get(`${envConfig.baseUrl}/experience`, {
        cache: "no-store",
      });

    return data;
  } catch (error) {
    toast("something went wrong");
    console.log(error);
  }
};

export const getProjectData = async () => {
  try {
    const { data }: NexiosResponse<IResponse<TProject[]>> =
      await nexiosInstance.get(`${envConfig.baseUrl}/social`, {
        cache: "no-store",
      });

    return data;
  } catch (error) {
    toast("something went wrong");
    console.log(error);
  }
};

export const getSocialData = async () => {
  try {
    const { data }: NexiosResponse<IResponse<TSocial[]>> =
      await nexiosInstance.get(`${envConfig.baseUrl}/social`, {
        cache: "no-store",
      });

    return data;
  } catch (error) {
    toast("something went wrong");
    console.log(error);
  }
};

export const getSkillData = async () => {
  try {
    const { data }: NexiosResponse<IResponse<TSkill[]>> =
      await nexiosInstance.get(`${envConfig.baseUrl}/skill`, {
        cache: "no-store",
      });

    return data;
  } catch (error) {
    toast("something went wrong");
    console.log(error);
  }
};

export const getBlogData = async () => {
  try {
    const { data }: NexiosResponse<IResponse<TBlog[]>> =
      await nexiosInstance.get(`${envConfig.baseUrl}/blog`, {
        cache: "no-store",
      });

    return data;
  } catch (error) {
    toast("something went wrong");
    console.log(error);
  }
};

export const getBlogDetails = async (id: string) => {
  try {
    const { data }: NexiosResponse<IResponse<TBlog>> = await nexiosInstance.get(
      `${envConfig.baseUrl}/blog/${id}`,
      {
        cache: "no-store",
      }
    );

    return data;
  } catch (error) {
    toast("something went wrong");
    console.log(error);
  }
};
