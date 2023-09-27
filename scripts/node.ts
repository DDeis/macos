import { $, chalk, echo, spinner } from 'npm:zx@7.2.3';

await spinner('Installing node...', () => {
  $`brew install node`;

  // Prepare for "n" node version manager (To avoid requiring sudo for n and npm global installs)
  // make cache folder (if missing) and take ownership
  $`sudo mkdir -p /usr/local/n`;
  $`sudo chown -R $(whoami) /usr/local/n`;
  // make sure the required folders exist (safe to execute even if they already exist)
  $`sudo mkdir -p /usr/local/bin /usr/local/lib /usr/local/include /usr/local/share`;
  // take ownership of Node.js install destination folders
  $`sudo chown -R $(whoami) /usr/local/bin /usr/local/lib /usr/local/include /usr/local/share`;
});

echo`${chalk.green('✔')} Successfully installed node`
