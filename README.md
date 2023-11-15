
# Mood Music

## Setup Instructions

### Step 1: Install Miniconda
Miniconda is a minimal installer for Conda, a package and environment management system. Download and install Miniconda from the official site:

- [Miniconda Installation Guide](https://docs.conda.io/projects/miniconda/en/latest/)

### Step 2: Create a Virtual Python Environment

#### For Windows, macOS, and Linux:
1. Open your terminal or command prompt.
2. Navigate to your project directory:
   ```
   cd path/to/your/project
   ```
3. Create a virtual environment:
   ```
   python -m venv venv
   ```
4. Activate the virtual environment:
   - **Windows:**
     ```
     venv\Scripts\activate
     ```
   - **macOS and Linux:**
     ```
     source venv/bin/activate
     ```

   **Note for Windows Users:** If you encounter a "running scripts is disabled" error when activating the virtual environment, run PowerShell as Administrator and execute:
   ```
   Set-ExecutionPolicy Unrestricted -Scope CurrentUser
   ```
5. Install required Python packages:
   ```
   pip install -r requirements.txt
   ```

### Step 3: Install Node.js
Download and install Node.js from the official website:

- [Node.js Downloads](https://nodejs.org/en/download/)

### Step 4: Restart Your Computer
This ensures that Node.js is properly initialized.

### Step 5: Install Node Modules
Navigate to your project's root directory in the terminal or command prompt and run:
```
npm install
```

### Step 6: Running the Application

1. Activate the virtual environment:
   - **Windows:**
     ```
     .venv\Scripts\activate
     ```
   - **macOS and Linux:**
     ```
     source venv/bin/activate
     ```
2. Start the server:
   ```
   python run.py
   ```

The application will run in development mode. Open [http://localhost:3000](http://localhost:3000) in your browser to view it.