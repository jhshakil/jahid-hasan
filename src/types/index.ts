export type TProfile = {
  id: string;
  name: string;
  designation: string;
  instruction: string;
  resumeLink: string;
  image: string;
  about: string;
  phoneNumber: string;
  email: string;
  language: string;
  address: string;
  createdAt: string;
  updateAt: string;
};

export type TSocial = {
  id: string;
  name: string;
  url: string;
  icon: string;
  createdAt: string;
  updateAt: string;
};

export type TExperience = {
  id: string;
  companyName: string;
  duration: string;
  designation: string;
  description: string;
  priority: number;
  createdAt: string;
  updateAt: string;
};
