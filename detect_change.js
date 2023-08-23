const { execSync } = require('child_process');

// Function to execute a command and get its output
function executeCommand(command) {
  return execSync(command, { encoding: 'utf-8' }).trim();
}

// Get the current branch name
const currentBranch = executeCommand('git rev-parse --abbrev-ref HEAD');

// Get the number of changed files between main and the current branch
const numChangedFiles = executeCommand(`git diff --name-only main...${currentBranch} | wc -l`);

// Output 1 if changes are detected, otherwise output 0
const hasChanges = numChangedFiles > 0 ? 1 : 0;

console.log(hasChanges);
