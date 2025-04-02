from flask import Flask, render_template, request, jsonify
import google.generativeai as genai

app = Flask(__name__)

# Configure Gemini API
GOOGLE_API_KEY = "AIzaSyB30U-AYT4TEYfA58EifWo33sbFDhbO_NI"
genai.configure(api_key=GOOGLE_API_KEY)

# Use an available model name
MODEL_NAME = "gemini-1.5-pro"  # Make sure to use the correct model

model = genai.GenerativeModel(MODEL_NAME)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/generate', methods=['POST'])
def generate():
    try:
        data = request.json
        if not data or 'topic' not in data:
            return jsonify({'error': 'No topic provided'}), 400

        video_topic = data.get('topic')

        # Generate video script
        script_prompt = f"Create a detailed video script for a video about {video_topic}. Include scene descriptions and dialogues."
        script_response = model.generate_content(script_prompt)
        
        if not script_response or not hasattr(script_response, 'text'):
            return jsonify({'error': 'Failed to generate script'}), 500
        script = script_response.text

        # Generate storyboard descriptions
        storyboard_prompt = f"Create a storyboard description for a video about {video_topic}. Break it down into key scenes with visual descriptions."
        storyboard_response = model.generate_content(storyboard_prompt)
        
        if not storyboard_response or not hasattr(storyboard_response, 'text'):
            return jsonify({'error': 'Failed to generate storyboard'}), 500
        storyboard = storyboard_response.text

        return jsonify({
            'script': script,
            'storyboard': storyboard
        })

    except Exception as e:
        print(f"Error occurred: {str(e)}")
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
