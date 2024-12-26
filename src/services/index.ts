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

export const getProjectData = async () => {
  try {
    const res = await fetch(`${envConfig.baseUrl}/project`);

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

export const getSkillData = async () => {
  try {
    const res = await fetch(`${envConfig.baseUrl}/skill`);

    return res.json();
  } catch (error) {
    toast("something went wrong");
    console.log(error);
  }
};

export const getBlogData = async () => {
  try {
    const res = await fetch(`${envConfig.baseUrl}/blog`);

    return res.json();
  } catch (error) {
    toast("something went wrong");
    console.log(error);
  }
};

export const getBlogDetails = async (id: string) => {
  try {
    const res = await fetch(`${envConfig.baseUrl}/blog/${id}`);

    return res.json();
  } catch (error) {
    toast("something went wrong");
    console.log(error);
  }
};
