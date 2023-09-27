import { $, chalk, echo, spinner } from "npm:zx@7.2.3";


await spinner(`Installing fonts...`, async () => {
  await $`brew tap homebrew/cask-fonts`

  // Nerd Fonts (Terminal)
  await $`brew install --cask font-hack-nerd-font`
  // Fira Code (Editor)
  await $`brew install --cask font-fira-code`

  // // SVN necessary to install some fonts
  // await $`brew install svn`
  
  await $`brew install --cask font-dm-sans`
})

// success('Successfully installed fonts')
echo`${chalk.green('✔')} Successfully installed fonts`
