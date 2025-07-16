import time
import datetime
from utils.supabase_utils import fetch_active_reminders
from utils.email_utils import send_patient_reminder, send_caregiver_confirmation
from utils.twilio_utils import make_patient_call, make_caregiver_call

def is_time_to_remind(schedule_time):
    now = datetime.datetime.now().strftime('%H:%M')
    return now == schedule_time

def run_scheduler():
    print("📅 Reminder Scheduler Started...")
    while True:
        try:
            reminders = fetch_active_reminders()
            for reminder in reminders:
                user = reminder["user_details"]
                patient_name = user["name"]
                patient_email = user["email"]
                patient_phone = user["phone"]
                caregiver_email = user["caregiverEmail"]

                reminder_id = reminder.get("id")
                for med in reminder["medication_schedules"]:
                    if med.get("useAutoSchedule") and "times" in med:
                        for time_str in med["times"]:
                            if is_time_to_remind(time_str):
                                print(f"🔔 Sending reminder for {med['name']} to {patient_name} at {time_str}")

                                # Send patient email
                                send_patient_reminder(
                                    patient_email,
                                    patient_name,
                                    med,
                                    reminder_id
                                )

                                # Simulate delay, then auto call if no action (for demo)
                                # In production, you'd wait for actual confirmation
                                time.sleep(10)
                                print(f"📞 No email response detected. Calling {patient_phone}...")
                                make_patient_call(patient_phone, patient_name, med, reminder_id)
        except Exception as e:
            print(f"❌ Scheduler error: {e}")

        time.sleep(60)  # wait 1 minute before next cycle

if __name__ == "__main__":
    run_scheduler()
