const {
  command
} = require('../utils/command');
const {
  getBranch,
  getBranchFromCommit,
  getBump,
  synchronize,
  commit,
  pushTags,
  getCommitMessage,
} = require('../utils/git');
const {
  branch,
  commit: commitParam
} = require('../utils/params');
const commitId = commitParam === true ? undefined : commitParam;
let branchName;
if (commitParam) {
  branchName = getBranchFromCommit(commitId);
} else {
  branchName = branch || getBranch();
}

// Bump version according to the bump type
const bumpVersion = bump => {
  const commandBump = `npm run version:${bump}`;
  command(commandBump, () => {
    console.dir('Bumped new version!');

    const message = getCommitMessage();
    commit(`BOT: ${message}`);

    pushTags();
    synchronize();
  });
};

bumpVersion(getBump(branchName));
