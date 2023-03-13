import openai as ai
from fastapi import FastAPI,Body
import uvicorn
from fastapi.middleware.cors import CORSMiddleware
#from pydantic import BaseModel
#from rest_framework.parsers import JSONParser
app = FastAPI()


origins=['https"//localhost:3000']
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)
ai.api_key="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"
@app.get("/")
def fun():
    return "Resume"
#fv={'id':1,"name":"guru"}

@app.post("/resume")
def generate_gpt3_response(fv):
    print(fv)
    #tutorial_data = JSONParser().parse(fv)
    #print(tutorial_data)
    # user_text="generate resume for "+str(fv['fname'])+' '+'having '+str(fv['Exp'])+'years'+'experience in  '+str(fv['fexp'])+'field and completed his bachelors in '+str(fv['fed'])+'department'
    # print(user_text)
    # """
    # Query OpenAI GPT-3 for the specific key and get back a response
    # :type user_text: str the user's text to query for
    # :type print_output: boolean whether or not to print the raw output JSON
    # """
    # completions = ai.Completion.create(
    #     engine='text-davinci-003',  # Determines the quality, speed, and cost.
    #     temperature=0.5,            # Level of creativity in the response
    #     prompt=user_text,           # What the user typed in
    #     max_tokens=1000,             # Maximum tokens in the prompt AND response
    #     n=1,                        # The number of completions to generate
    #     stop=None,                  # An optional setting to control response generation
    # )
    # return completions.choices[0].text
    return 'str'
if __name__ == '__main__':
    uvicorn.run(app, port=8080, host='0.0.0.0')
