import os
from dotenv import load_dotenv
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

load_dotenv()

SENDGRID_API_KEY = os.getenv("SENDGRID_API_KEY")
SENDER_EMAIL = os.getenv("SENDER_EMAIL", "noreply@healoclock.com")
BASE_URL = os.getenv("FRONTEND_BASE_URL", "https://yourdomain.com")

def send_patient_reminder(patient_email, patient_name, medication, reminder_id):
    """
    Sends an email to the patient with YES/NO options for medication intake.
    """
    subject = f"💊 Time to take your medicine: {medication['name']}"
    yes_url = f"{BASE_URL}/respond?reminder_id={reminder_id}&type=patient&response=yes"
    no_url = f"{BASE_URL}/respond?reminder_id={reminder_id}&type=patient&response=no"

    html_content = f"""
    <p>Hi {patient_name},</p>
    <p>This is your medication reminder.</p>
    <ul>
      <li><b>Medicine:</b> {medication['name']}</li>
      <li><b>Dosage:</b> {medication['dosage']}</li>
      <li><b>Instructions:</b> {medication['instructions']}</li>
    </ul>
    <p>Did you take this medicine?</p>
    <a href="{yes_url}">✅ Yes</a> | <a href="{no_url}">❌ No</a>
    """

    message = Mail(
        from_email=SENDER_EMAIL,
        to_emails=patient_email,
        subject=subject,
        html_content=html_content
    )

    try:
        sg = SendGridAPIClient(SENDGRID_API_KEY)
        response = sg.send(message)
        print(f"📧 Email sent to patient: {patient_email} - Status {response.status_code}")
        return True
    except Exception as e:
        print(f"❌ Failed to send patient email: {e}")
        return False

def send_caregiver_confirmation(caregiver_email, patient_name, medication, reminder_id):
    """
    Sends confirmation email to caregiver once patient confirms medication intake.
    """
    subject = f"📢 Confirmation Needed: {patient_name} took {medication['name']}?"
    yes_url = f"{BASE_URL}/respond?reminder_id={reminder_id}&type=caregiver&response=yes"
    no_url = f"{BASE_URL}/respond?reminder_id={reminder_id}&type=caregiver&response=no"

    html_content = f"""
    <p>Dear Caregiver,</p>
    <p>{patient_name} reported that they took <b>{medication['name']}</b>.</p>
    <p>Can you please confirm?</p>
    <a href="{yes_url}">✅ Yes</a> | <a href="{no_url}">❌ No</a>
    """

    message = Mail(
        from_email=SENDER_EMAIL,
        to_emails=caregiver_email,
        subject=subject,
        html_content=html_content
    )

    try:
        sg = SendGridAPIClient(SENDGRID_API_KEY)
        response = sg.send(message)
        print(f"📧 Email sent to caregiver: {caregiver_email} - Status {response.status_code}")
        return True
    except Exception as e:
        print(f"❌ Failed to send caregiver email: {e}")
        return False
