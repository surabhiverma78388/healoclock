import os
import base64
import requests
from dotenv import load_dotenv

load_dotenv()

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

def extract_text_from_image(image_bytes):
    """
    Uses Gemini Vision API to extract text from a prescription image.
    """
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-pro-vision:generateContent?key={GEMINI_API_KEY}"

    # Convert image bytes to base64 for Gemini Vision
    base64_image = base64.b64encode(image_bytes).decode("utf-8")

    payload = {
        "contents": [
            {
                "parts": [
                    {
                        "inline_data": {
                            "mime_type": "image/jpeg",
                            "data": base64_image
                        }
                    },
                    {
                        "text": "Extract all medication names, dosages, frequencies (e.g., 2x daily), durations (e.g., 5 days), and instructions."
                    }
                ]
            }
        ]
    }

    response = requests.post(url, json=payload)
    result = response.json()
    
    try:
        return result['candidates'][0]['content']['parts'][0]['text']
    except Exception as e:
        print("Error in Gemini OCR response:", e)
        return ""

def parse_prescription_text(text):
    """
    Uses Gemini Pro to convert raw text into structured medication list.
    """
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key={GEMINI_API_KEY}"
    
    prompt = f"""
    Analyze the following prescription text and return a list of medications with fields:
    - name
    - dosage
    - frequency
    - duration
    - instructions

    Output JSON format:
    {{
      "medications": [
        {{
          "name": "Paracetamol",
          "dosage": "500mg",
          "frequency": "2x daily",
          "duration": "5 days",
          "instructions": "after meals"
        }},
        ...
      ]
    }}

    TEXT:
    {text}
    """

    payload = {
        "contents": [
            {
                "parts": [{"text": prompt}]
            }
        ]
    }

    response = requests.post(url, json=payload)
    result = response.json()

    try:
        response_text = result['candidates'][0]['content']['parts'][0]['text']
        return eval(response_text) if "medications" in response_text else {"medications": []}
    except Exception as e:
        print("Error in Gemini parsing:", e)
        return {"medications": []}
