import { $, echo, chalk, spinner } from "npm:zx@7.2.3";
import { checkbox, Separator } from "npm:@inquirer/prompts@3.1.2";

function getRemoteFile(file: string) {
  return `https://raw.githubusercontent.com/DDeis/macos/main/scripts/${file}?token=GHSAT0AAAAAACG2SSBFVK35DUMN72FCNKESZIUK6TA`
}

const commands = await checkbox({
  message: 'Select what to setup ?',
  choices: [
    { name: 'test', value: `deno run ${getRemoteFile('test.ts')}` },
    { name: 'ZSH', value: `deno run ${getRemoteFile('zsh.ts')}` },
    { name: 'fonts', value: `deno run ${getRemoteFile('zsh.ts')}` },
    new Separator('Browsers'),
    { name: 'Chrome', value: 'brew install --cask google-chrome' },
    { name: 'firefox', value: 'brew install --cask firefox' },
    { name: 'Edge', value: 'brew install --cask microsoft-edge' },
    { name: 'Opera', value: 'brew install --cask opera' },
    { name: 'Arc', value: 'brew install --cask arc' },
    { name: 'Brave', value: 'brew install --cask brave-browser' },
    { name: 'Vivaldi', value: 'brew install --cask vivaldi' },
    new Separator('Entertainment'),
    { name: 'spotify', value: 'brew install --cask spotify' },
    { name: 'vlc', value: 'brew install --cask vlc' },
    new Separator('Communication'),
    { name: 'slack', value: 'brew install --cask slack' },
    {
      name: 'microsoft-teams',
      value: 'brew install --cask microsoft-teams',
      checked: false,
    },
    new Separator('Tools'),
    { name: 'notion', value: 'brew install --cask notion' },
    { name: 'figma', value: 'brew install --cask figma' },
    { name: 'miro', value: 'brew install --cask miro' },
    new Separator('Utilities'),
    { name: 'keyclu', value: 'brew install --cask keyclu' },
    { name: 'appcleaner', value: 'brew install --cask appcleaner' },
    { name: 'rectangle', value: 'brew install --cask rectangle' },
    { name: '1password', value: 'brew install --cask 1password' },
    new Separator('Dev'),
    {
      name: 'visual-studio-code',
      value: 'brew install --cask visual-studio-code',
      checked: false,
    },
    { name: 'postman', value: 'brew install --cask postman' },
    { name: 'docker', value: 'brew install --cask docker' },
    { name: 'devtoys', value: 'brew install --cask devtoys' },
    { name: 'node', value: `deno run ${getRemoteFile('node.ts')}` },
    // { name: 'deno', value: 'deno run https://examples.deno.land/import-export/main.ts' },
    // { name: 'bun', value: 'deno run https://examples.deno.land/import-export/main.ts' },
    new Separator('Terminal'),
    { name: 'ffmpeg', value: 'brew install ffmpeg' },
    { name: 'streamlink', value: 'brew install streamlink' },
    { name: 'lsd', value: 'brew install lsd' },
    { name: 'bat', value: 'brew install bat' },
    { name: 'tag', value: 'brew install tag' },
    { name: 'autojump', value: 'brew install autojump' },
    { name: 'fdupes', value: 'brew install fdupes' },
    new Separator('Work'),
    { name: 'sfr', value: `deno run ${getRemoteFile('sfr.ts')}` },
  ],
});

for (let i = 0; i < commands.length; i++) {
  await $`${commands[i]}`;
}
