import subprocess
import os
import platform

def open_terminal(command, directory):
    system = platform.system().lower()
    
    if system == 'darwin':
        subprocess.Popen(['osascript', '-e', f'tell application "Terminal" to do script "cd {directory} && {command}"'])
    elif system == 'windows':
        subprocess.Popen(['cmd', '/k', f'cd {directory} && {command}'], shell=True)
    elif system == 'linux':
        subprocess.Popen(['gnome-terminal', '--', 'bash', '-c', f'cd {directory} && {command}'])
    else:
        print("Unsupported operating system")

# Get the current working directory
current_directory = os.getcwd()

# Command to run Flask in the current directory
flask_command = 'cd backend && python3 app.py'

# Command to run npm start in the current directory
npm_command = 'npm start'

# Open a terminal window with the specified commands in the current directory
open_terminal(flask_command, current_directory)
open_terminal(npm_command, current_directory)
