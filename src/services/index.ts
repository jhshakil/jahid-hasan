"use server";

import { envConfig } from "@/config/envConfig";
import { toast } from "sonner";

export const getProfileData = async () => {
  try {
    const fetchOption = {
      next: {
        tags: ["profiles"],
      },
    };
    const res = await fetch(`${envConfig.baseUrl}/profile`, fetchOption);

    return res.json();
  } catch (error) {
    toast("something went wrong");
    console.log(error);
  }
};

export const getExperienceData = async () => {
  try {
    const fetchOption = {
      next: {
        tags: ["experiences"],
      },
    };
    const res = await fetch(`${envConfig.baseUrl}/experience`, fetchOption);

    return res.json();
  } catch (error) {
    toast("something went wrong");
    console.log(error);
  }
};

export const getProjectData = async () => {
  try {
    const fetchOption = {
      next: {
        tags: ["projects"],
      },
    };
    const res = await fetch(`${envConfig.baseUrl}/project`, fetchOption);

    return res.json();
  } catch (error) {
    toast("something went wrong");
    console.log(error);
  }
};

export const getSocialData = async () => {
  try {
    const fetchOption = {
      next: {
        tags: ["socials"],
      },
    };
    const res = await fetch(`${envConfig.baseUrl}/social`, fetchOption);

    return res.json();
  } catch (error) {
    toast("something went wrong");
    console.log(error);
  }
};

export const getSkillData = async () => {
  try {
    const fetchOption = {
      next: {
        tags: ["skills"],
      },
    };
    const res = await fetch(`${envConfig.baseUrl}/skill`, fetchOption);

    return res.json();
  } catch (error) {
    toast("something went wrong");
    console.log(error);
  }
};

export const getBlogData = async () => {
  try {
    const fetchOption = {
      next: {
        tags: ["blogs"],
      },
    };
    const res = await fetch(`${envConfig.baseUrl}/blog`, fetchOption);

    return res.json();
  } catch (error) {
    toast("something went wrong");
    console.log(error);
  }
};

export const getBlogDetails = async (id: string) => {
  try {
    const fetchOption = {
      next: {
        tags: ["blog"],
      },
    };
    const res = await fetch(`${envConfig.baseUrl}/blog/${id}`, fetchOption);

    return res.json();
  } catch (error) {
    toast("something went wrong");
    console.log(error);
  }
};
