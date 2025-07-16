import os
from supabase import create_client, Client
from dotenv import load_dotenv

load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

def save_reminder_to_supabase(reminder_data):
    """
    Saves the reminder data into the 'reminders' table in Supabase.
    """
    try:
        response = supabase.table("reminders").insert(reminder_data).execute()
        if response.error:
            print("❌ Supabase insert error:", response.error)
            return False
        print("✅ Reminder saved to Supabase.")
        return True
    except Exception as e:
        print("❌ Exception while saving to Supabase:", e)
        return False

def fetch_active_reminders():
    """
    Fetches all reminders with status 'active' for processing in the scheduler.
    """
    try:
        response = supabase.table("reminders").select("*").eq("status", "active").execute()
        return response.data if not response.error else []
    except Exception as e:
        print("❌ Error fetching reminders:", e)
        return []
