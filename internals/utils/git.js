const { commandSync } = require('./command');

const getCommitMessage = commit => {
  return commandSync(`git log --format=%B -n 1 ${commit || ''}`);
};

const getBranch = () => {
  return commandSync('git symbolic-ref --short HEAD');
};

const getBranchFromCommit = commit => {
  const message = getCommitMessage(commit);
  const regexBranch = /Merge branch \'(.+)\' into .+/;
  if (message.match(regexBranch)) {
    return regexBranch.exec(message)[1];
  }

  return getBranch();
};

const getBump = branch => {
  let bump = 'patch';
  const branchPath = branch.split('/');
  if (branchPath.length !== 2) {
    return bump;
  }

  switch (branchPath[0]) {
    case 'minor':
    case 'feature':
      bump = 'minor';
      break;
    case 'major':
    case 'breaking':
      bump = 'major';
      break;
  }

  return bump;
};

const pull = branch => {
  const branchName = branch || getBranch();
  commandSync(`git pull origin ${branchName}`);
};

const push = branch => {
  const branchName = branch || getBranch();
  commandSync(`git push origin ${branchName}`);
};

const synchronize = branch => {
  const branchName = branch || getBranch();
  pull(branchName);
  push(branchName);
};

commit = message => {
  commandSync(`git commit --amend -m \"${message}\"`);
};

const pushTags = () => {
  push('--tags');
};

const createTag = (name, message) => {
  commandSync(`git tag -a ${name} -m \"${message}\"`);
  pushTags();
};

const deleteTag = name => {
  commandSync(`git tag -d ${name}`);
  pushTags();
};

module.exports = {
  getBranch,
  getBranchFromCommit,
  getCommitMessage,
  getBump,
  synchronize,
  commit,
  pull,
  push,
  pushTags,
  createTag,
  deleteTag,
};
