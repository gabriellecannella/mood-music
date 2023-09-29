import subprocess
import platform

def open_terminal(command):
    system = platform.system()
    if system == 'Darwin':  # macOS
        subprocess.call(['osascript', '-e', f'tell application "Terminal" to do script "{command}"'])
    elif system == 'Windows':  # Windows
        subprocess.Popen(['start', 'cmd', '/k', command], shell=True)
    elif system == 'Linux':  # Linux
        subprocess.Popen(['gnome-terminal', '--', 'bash', '-c', command])

# Command to run Flask in the "backend" directory
flask_command = 'cd backend && python -m flask --app app run'

# Command to run npm start
npm_command = 'npm start'

# Open two terminal windows with the specified commands
open_terminal(flask_command)
open_terminal(npm_command)
