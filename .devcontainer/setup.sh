# Install all the Python packages we'll need
pip3 install --user -r ./.devcontainer/requirements.txt

# Install node/npx so we can create NextJS apps
sudo apt install curl -y
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install nodejs

# Set ll alias
alias ll="ls -al"