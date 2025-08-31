from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import fitz  # PyMuPDF
import os
import base64

app = Flask(__name__)
CORS(app)

OPENROUTER_API_KEY = "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"

TEXT_MODEL = "meta-llama/llama-4-maverick:free"
IMAGE_MODEL = "qwen/qwen2.5-vl-32b-instruct:free"

@app.route('/')
def index():
    return jsonify({"message": "API is running"})

def extract_text_from_file(file):
    ext = os.path.splitext(file.filename)[-1].lower()

    if ext == ".pdf":
        text = ""
        doc = fitz.open(stream=file.read(), filetype="pdf")
        for page in doc:
            text += page.get_text()
        return text

    elif ext in [".txt"]:
        return file.read().decode("utf-8")

    elif ext in [".png", ".jpg", ".jpeg"]:
        return {"image": file.read()}

    else:
        return None

@app.route("/ask", methods=["POST"])
def ask():
    text = request.form.get("text")
    file = request.files.get("file")

    content = []
    selected_model = TEXT_MODEL

    if text:
        content.append({"type": "text", "text": text})

    if file:
        extracted = extract_text_from_file(file)

        if isinstance(extracted, dict) and "image" in extracted:
            base64_image = base64.b64encode(extracted["image"]).decode("utf-8")
            content = [{
                "type": "image_url",
                "image_url": {
                    "url": f"data:image/jpeg;base64,{base64_image}"
                }
            }]
            selected_model = IMAGE_MODEL

        elif isinstance(extracted, str):
            content.append({"type": "text", "text": extracted})

        else:
            return jsonify({"error": "نوع الملف غير مدعوم"}), 400

    if not content:
        return jsonify({"error": "لا يوجد محتوى مرسل"}), 400

    try:
        response = requests.post(
            "https://openrouter.ai/api/v1/chat/completions",
            headers={
                "Authorization": f"Bearer {OPENROUTER_API_KEY}",
                "HTTP-Referer": "http://localhost:5173",
                "X-Title": "AhmedBot",
                "Content-Type": "application/json"
            },
            json={
                "model": selected_model,
                "messages": [{"role": "user", "content": content}]
            },
            timeout=30
        )

        if response.ok:
            reply = response.json()["choices"][0]["message"]["content"]
            return jsonify({"reply": reply})
        else:
            return jsonify({
                "error": "API request failed",
                "details": response.text
            }), response.status_code

    except Exception as e:
        return jsonify({
            "error": "Internal Server Error",
            "details": str(e)
        }), 500

if __name__ == "__main__":
    app.run(debug=True)
