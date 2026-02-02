from google import genai
import os
from dotenv import load_dotenv

load_dotenv()

os.environ["GEMINI_API_KEY"] = os.getenv("gemini")

client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])


def synthesizer(content: str):
    print("synthesizing")
    try:
        response = client.models.generate_content(
            model="gemini-3-flash-preview",
            contents=content
        )
        print(response.text)

    except Exception as e:
        print(f"Error occurred: {e}")