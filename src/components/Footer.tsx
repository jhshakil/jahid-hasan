import { IResponse, TSocial } from "@/types";
import { NexiosResponse } from "nexios-http/types/interfaces";
import Link from "next/link";
import nexiosInstance from "../../nexios.config";
import { envConfig } from "@/config/envConfig";

const Footer = async () => {
  const { data: socialData }: NexiosResponse<IResponse<TSocial[]>> =
    await nexiosInstance.get(`${envConfig.baseUrl}/experience`, {
      cache: "no-store",
    });

  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-2xl font-bold leading-loose md:text-left">
            Jahid Hasan
          </p>
        </div>
        <div className="flex gap-4">
          {socialData &&
            socialData?.data?.map((social: TSocial) => (
              <Link
                key={social.id}
                href={social?.url || "#"}
                target="_blank"
                rel="noreferrer"
              >
                <span>{social.name}</span>
              </Link>
            ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
