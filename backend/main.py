from fastapi import FastAPI, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
from utils.gemini_utils import extract_text_from_image, parse_prescription_text
from utils.supabase_utils import save_reminder_to_supabase
import os

app = FastAPI()

# Allow CORS from frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/upload-prescription")
async def upload_prescription(file: UploadFile, name: str = Form(...), email: str = Form(...), phone: str = Form(...), caregiverEmail: str = Form(...)):
    image_bytes = await file.read()
    ocr_text = extract_text_from_image(image_bytes)
    parsed = parse_prescription_text(ocr_text)

    reminder = {
        "user_details": {
            "name": name,
            "email": email,
            "phone": phone,
            "caregiverEmail": caregiverEmail
        },
        "medication_schedules": parsed["medications"],
        "status": "active"
    }

    success = save_reminder_to_supabase(reminder)
    return {"success": success, "parsed": parsed}
