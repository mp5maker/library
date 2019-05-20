## Installation for fish ##
    sudo apt-get install fish
    curl https://git.io/fisher --create-dirs -sLo ~/.config/fish/functions/fisher.fish
    fisher add edc/bass
    pip install --user virtualfish
    sudo nano ~/.config/fish/config.fish
    eval (python3 -m virtualfish compat_aliases)
    eval (python3 -m virtualfish auto_activation global_requirements)


## Integration in VS Code Terminal ##
    "terminal.integrated.shell.linux": "/usr/bin/fish" in settings.json


## Customization ##
    curl -L https://get.oh-my.fish | fish


## Ctrl KeyBind Problem ###
    set -U fish_key_bindings fish_default_key_bindings

## Adding the fonts ##
    wget https://github.com/ryanoasis/nerd-fonts/releases/download/v1.0.0/FiraCode.zip
    sudo unzip FiraCode.zip -d /usr/local/share/fonts/
    sudo fc-cache -fv
    set -U theme_nerd_fonts yes