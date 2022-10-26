/* eslint-disable import/no-anonymous-default-export */
const {Octokit} = require("@octokit/rest");

export default async (req, res) => {
  const octokit = new Octokit({
    auth: process.env.GITHUB_AUTH_TOKEN,
  });
  const repo = await octokit.request(
    "/repos/jsvigneshkanna/tailwind_ui_components",
  );
  const forksCount = repo.data.forks;
  const starsCount = repo.data.watchers;
  return res.status(200).json({stars: starsCount, forks: forksCount});
};
