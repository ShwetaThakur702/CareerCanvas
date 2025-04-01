// AI Helper functions using Gemini API

class AIHelper {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.apiEndpoint = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';
    }

    // Helper function to clean JSON string
    cleanJsonString(jsonStr) {
        // Remove markdown code block markers
        jsonStr = jsonStr.replace(/```json\n?/g, '').replace(/```\n?/g, '');
        // Remove any leading/trailing whitespace
        jsonStr = jsonStr.trim();
        return jsonStr;
    }

    async processResume(text) {
        try {
            const prompt = `
            Analyze this text extracted from a resume/CV and extract the following information. Return ONLY the JSON object, no markdown formatting or additional text:
            {
                "personalInfo": {
                    "name": "",
                    "title": "",
                    "email": "",
                    "phone": "",
                    "location": "",
                    "summary": ""
                },
                "education": [
                    {
                        "institution": "",
                        "degree": "",
                        "year": ""
                    }
                ],
                "experience": [
                    {
                        "company": "",
                        "position": "",
                        "duration": "",
                        "description": ""
                    }
                ],
                "skills": [],
                "projects": [
                    {
                        "name": "",
                        "description": "",
                        "link": ""
                    }
                ]
            }

            Here's the text to analyze:
            ${text}
            `;

            const response = await fetch(`${this.apiEndpoint}?key=${this.apiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: prompt
                        }]
                    }]
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('API Error Response:', errorData);
                throw new Error(`AI API request failed: ${errorData.error?.message || 'Unknown error'}`);
            }

            const data = await response.json();
            console.log('API Success Response:', data);
            const responseText = data.candidates[0].content.parts[0].text;
            const cleanedJson = this.cleanJsonString(responseText);
            const parsedData = JSON.parse(cleanedJson);
            return parsedData;
        } catch (error) {
            console.error('Error processing with AI:', error);
            throw error;
        }
    }

    async suggestImprovements(resumeData) {
        try {
            const prompt = `
            Analyze this resume data and suggest improvements for each section. Return ONLY the JSON object, no markdown formatting or additional text:
            {
                "personalInfo": [],
                "education": [],
                "experience": [],
                "skills": [],
                "projects": []
            }

            Resume data:
            ${JSON.stringify(resumeData, null, 2)}
            `;

            const response = await fetch(`${this.apiEndpoint}?key=${this.apiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: prompt
                        }]
                    }]
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('API Error Response:', errorData);
                throw new Error(`AI API request failed: ${errorData.error?.message || 'Unknown error'}`);
            }

            const data = await response.json();
            console.log('API Success Response:', data);
            const responseText = data.candidates[0].content.parts[0].text;
            const cleanedJson = this.cleanJsonString(responseText);
            const suggestions = JSON.parse(cleanedJson);
            return suggestions;
        } catch (error) {
            console.error('Error getting AI suggestions:', error);
            throw error;
        }
    }

    async generateSummary(experience, skills) {
        try {
            const prompt = `
            Based on the following experience and skills, generate a professional summary. Return ONLY the summary text, no markdown formatting or additional text:

            Experience:
            ${JSON.stringify(experience, null, 2)}

            Skills:
            ${JSON.stringify(skills, null, 2)}
            `;

            const response = await fetch(`${this.apiEndpoint}?key=${this.apiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: prompt
                        }]
                    }]
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('API Error Response:', errorData);
                throw new Error(`AI API request failed: ${errorData.error?.message || 'Unknown error'}`);
            }

            const data = await response.json();
            console.log('API Success Response:', data);
            const responseText = data.candidates[0].content.parts[0].text;
            return this.cleanJsonString(responseText);
        } catch (error) {
            console.error('Error generating summary:', error);
            throw error;
        }
    }
}