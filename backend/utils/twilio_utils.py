import os
from dotenv import load_dotenv
from twilio.rest import Client

load_dotenv()

TWILIO_ACCOUNT_SID = os.getenv("TWILIO_ACCOUNT_SID")
TWILIO_AUTH_TOKEN = os.getenv("TWILIO_AUTH_TOKEN")
TWILIO_PHONE_NUMBER = os.getenv("TWILIO_PHONE_NUMBER")
BASE_URL = os.getenv("FRONTEND_BASE_URL", "https://yourdomain.com")

client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

def make_patient_call(phone_number, patient_name, medication, reminder_id):
    """
    Makes a call to the patient with a voice message asking if they took their medicine.
    """
    try:
        twiml_url = f"{BASE_URL}/twilio/patient-call?reminder_id={reminder_id}"
        call = client.calls.create(
            to=phone_number,
            from_=TWILIO_PHONE_NUMBER,
            url=twiml_url
        )
        print(f"📞 Call placed to patient: {phone_number}, SID: {call.sid}")
        return True
    except Exception as e:
        print(f"❌ Failed to call patient: {e}")
        return False

def make_caregiver_call(phone_number, patient_name, medication, reminder_id):
    """
    Makes a call to the caregiver reminding them to check the confirmation email.
    """
    try:
        twiml_url = f"{BASE_URL}/twilio/caregiver-call?reminder_id={reminder_id}"
        call = client.calls.create(
            to=phone_number,
            from_=TWILIO_PHONE_NUMBER,
            url=twiml_url
        )
        print(f"📞 Call placed to caregiver: {phone_number}, SID: {call.sid}")
        return True
    except Exception as e:
        print(f"❌ Failed to call caregiver: {e}")
        return False
