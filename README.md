Here is the full `README.md` file you can **directly copy-paste into your GitHub repo**:

---

```markdown
# 💊 Healoclock – Automated Prescription Reminder System ⏰

A smart, AI-powered prescription reminder system that helps patients take their medications on time while keeping caregivers in the loop. It uses image recognition, AI parsing, email and voice notifications to ensure adherence to prescribed medicines.

---

## 🚀 Features

- 📸 Upload prescription images
- 🤖 Extract medicines using Google Gemini Vision AI
- 📅 Auto-schedule reminders based on dosage and frequency
- 📧 Email reminders with YES/NO buttons
- 👩‍⚕️ Caregiver gets notified if patient confirms
- 📞 Twilio call alerts if patient/caregiver doesn’t respond
- 🔒 Secure backend using Supabase and FastAPI

---

## 📁 Folder Structure

```

healoclock/
├── backend/
│   ├── main.py                # FastAPI app
│   ├── scheduler.py           # Periodic notification scheduler
│   ├── send\_email.py          # Email logic via SendGrid
│   ├── make\_call.py           # Twilio call logic
│   ├── process\_ocr.py         # Gemini Vision AI OCR
│   ├── utils.py               # Helper functions
│   ├── requirements.txt       # Backend dependencies
│   └── .env                   # API keys and config
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx            # Main React app
│   │   ├── components/        # UI components
│   │   └── lib/               # Supabase client config
│   ├── public/
│   └── index.html
│
└── README.md

````

---

## ⚙️ Backend Setup (FastAPI)

1. Go to the `backend` folder:

```bash
cd backend
````

2. Create virtual environment:

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:

```bash
pip install -r requirements.txt
```

4. Create a `.env` file and add:

```env
# Supabase
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your-supabase-service-role-key

# Gemini AI
GEMINI_VISION_API_KEY=your-gemini-api-key

# Twilio
TWILIO_ACCOUNT_SID=your-twilio-sid
TWILIO_AUTH_TOKEN=your-twilio-auth-token
TWILIO_PHONE_NUMBER=+1234567890

# SendGrid
SENDGRID_API_KEY=your-sendgrid-api-key
FROM_EMAIL=verified-sender@example.com
SENDER_EMAIL=noreply@healoclock.com

# URLs
FRONTEND_BASE_URL=http://localhost:5173
BACKEND_BASE_URL=http://localhost:8000

# Scheduler
CHECK_INTERVAL_SECONDS=300
```

5. Run backend server:

```bash
uvicorn main:app --reload
```

6. Run scheduler (in another terminal):

```bash
python scheduler.py
```

---

## ⚛️ Frontend Setup (React + Vite)

1. Go to the `frontend` folder:

```bash
cd frontend
```

2. Install packages:

```bash
npm install
```

3. Run the frontend:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in browser

---

## 🧠 Tech Stack

* **Frontend**: React, TailwindCSS, Vite
* **Backend**: FastAPI, Supabase, Python
* **AI**: Gemini Vision API
* **Email**: SendGrid
* **Voice Calls**: Twilio

---

## 🛡️ Environment Variables Reference

| Variable                 | Description                                       |
| ------------------------ | ------------------------------------------------- |
| SUPABASE\_URL            | Supabase project URL                              |
| SUPABASE\_KEY            | Supabase service role key                         |
| GEMINI\_VISION\_API\_KEY | Google Gemini Vision API Key                      |
| TWILIO\_ACCOUNT\_SID     | Twilio Account SID                                |
| TWILIO\_AUTH\_TOKEN      | Twilio Auth Token                                 |
| TWILIO\_PHONE\_NUMBER    | Twilio phone number                               |
| SENDGRID\_API\_KEY       | SendGrid API key                                  |
| FROM\_EMAIL              | Verified sender email for SendGrid                |
| SENDER\_EMAIL            | Sender address for outbound notifications         |
| FRONTEND\_BASE\_URL      | Base URL of frontend (for redirect links)         |
| BACKEND\_BASE\_URL       | Base URL of backend (used in links and API calls) |
| CHECK\_INTERVAL\_SECONDS | Time between each scheduler check                 |

---

## 📸 Screenshots

> 💡 Add screenshots/gifs of:
>
> * Upload section
> * Extracted prescription
> * Email mockup with Yes/No
> * Call flow (optional Twilio dashboard or flow diagram)

---

## 🙋‍♀️ Want to Contribute?

PRs and suggestions welcome! Let’s improve medication adherence together. ❤️

---

## 📜 License

MIT License – Free for personal and commercial use.

```

---

✅ You can now paste this into a `README.md` file in your GitHub repo.

Let me know if you want help adding badges (like build, deploy, Twilio verified, etc.) or screenshots!
```
