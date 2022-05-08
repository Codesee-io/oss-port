import { MarkGithubIcon } from "@primer/octicons-react";
import type { FC } from "react";
import { DISCORD_LINK, REPO_URL } from "~/utils/constants";
import CodeSeeWordmark from "~/images/CodeSeeWordmark";
import DiscordIcon from "./icons/DiscordIcon";

const Footer: FC = () => (
  <footer className="bg-black-50 text-black-400 px-4 py-12">
    <p className="text-sm text-center flex items-center justify-center">
      Built with tea and love by{" "}
      <a
        className="opacity-75 supports-hover:hover:opacity-100 ml-1"
        href="https://www.codesee.io"
        target="_blank"
        rel="noreferrer"
        aria-label="CodeSee"
      >
        <CodeSeeWordmark className="h-4" />
      </a>
    </p>
    <div className="text-sm text-center mt-4 flex gap-6 justify-center">
      <a
        className="opacity-75 supports-hover:hover:opacity-100 ml-1"
        href={REPO_URL}
        target="_blank"
        rel="noreferrer"
      >
        <span className="mr-2">Contribute</span>
        <MarkGithubIcon />
      </a>
      <a
        className="opacity-75 supports-hover:hover:opacity-100 ml-1"
        href={DISCORD_LINK}
        target="_blank"
        rel="noreferrer"
      >
        <span className="mr-2">Join us</span>
        <DiscordIcon className="w-4 h-4 inline-block mb-0.5" />
      </a>
    </div>
  </footer>
);

export default Footer;
