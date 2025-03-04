import json
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Mudando o nome da API para "api02"
app = FastAPI(title="api02")  

# Configurar CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)


def read_json_file():
    with open("guitars.json", "r", encoding="utf-8") as file:
        return json.load(file)

@app.get("/guitars")
def read_root():
    return read_json_file()
