**🏥 MediTrack - Healthcare Management System**

MediTrack is a full-stack healthcare management platform built to streamline hospital operations. It offers separate dashboards for admins, doctors, and patients with secure JWT authentication and a responsive UI using React and Django REST Framework.

**🔧 Tech Stack**

**Frontend:** React.js (Vite), Tailwind CSS, Axios, React Router

**Backend:** Django, Django REST Framework, Simple JWT

**Database:** PostgreSQL

**Authentication:** JSON Web Tokens (JWT)

**Deployment:** Localhost / GitHub (development)

**🚀 Features**

**👤 Authentication**

Secure registration and login with JWT

Role-based redirection (Admin, Doctor, Patient)

**🧑‍⚕️ Dashboards**

1, **Admin Dashboard**

Manage doctors and patients (Create/Update/Delete)

View all appointments

2. **Doctor Dashboard**

View assigned patients

View appointments

3. **Patient Dashboard**

View assigned doctor

View personal appointments

**📁 Folder Structure**

healthcare_project/
├── backend/                  # Django project and core app
│   ├── core/
│   ├── manage.py
│   └── ...
├── frontend/                # React app (Vite setup)
│   ├── src/
│   ├── public/
│   └── ...
├── README.md
└── requirements.txt

**🛠️ Setup Instructions**

**🔙 Backend (Django)**

# 1. Navigate to backend folder
cd backend

# 2. Create virtual environment and activate it
python -m venv env
env\Scripts\activate  # On Windows

# 3. Install dependencies
pip install -r requirements.txt

# 4. Apply migrations
python manage.py makemigrations
python manage.py migrate

# 5. Create superuser
python manage.py createsuperuser

# 6. Run development server
python manage.py runserver

**🔜 Frontend (React)**

# 1. Navigate to frontend folder
cd frontend

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

**🔐 JWT Authentication
**
The backend uses djangorestframework-simplejwt to manage JWT tokens.

Tokens are stored in localStorage

All protected routes attach the Authorization: Bearer <token> header


**🔐 Login Page**
![login page](https://github.com/user-attachments/assets/ffa8da83-84f4-42b0-8b53-5af9bfe5ecc7)

**Home page**
![Home_page](https://github.com/user-attachments/assets/ee5647ad-efaf-4cb2-9444-aaa9d876e202)


**🔄 Change Password**
![change_password](https://github.com/user-attachments/assets/e5a9c551-b67a-4424-becd-95cfe65e5a1a)

**📅 Appointments**

![Appointments](https://github.com/user-attachments/assets/dc96f868-a884-4356-a8af-2a8cff2155b6)

**users**
![users](https://github.com/user-attachments/assets/873fc591-bdd2-4e87-9e36-f67105b2901b)

**Doctors_panel**
![Doctors_Panel](https://github.com/user-attachments/assets/077819a6-eb5b-40ab-b8b5-519b3d7e13b7)

**Users Info**
![user_page](https://github.com/user-attachments/assets/e9a378db-9a1a-430e-b326-c7a6ff8d60d9)


**
📡 API Documentation**

**🔐 Authentication**

POST /api/register/ - Register a new user

POST /api/login/ - Login and receive JWT tokens

🩺 Doctor

GET /api/doctors/ - List all doctors

POST /api/doctors/ - Create a new doctor

👤 Patient

GET /api/patients/ - List all patients

POST /api/patients/ - Create a new patient

📅 Appointment

GET /api/appointments/ - List all appointments

POST /api/appointments/ - Book a new appointment

☁️ Deployment (Optional)

To deploy your backend and frontend:

Render (Backend)

Push code to GitHub

Create a new web service on Render

Set environment variables for DB and Django settings

**Add build commands:**

pip install -r requirements.txt
python manage.py migrate
python manage.py collectstatic

Vercel (Frontend)

Push React code to GitHub

Import project into Vercel

Set environment variables (e.g., API URL)

Deploy 🚀
**
📃 License**

This project is for educational purposes.
