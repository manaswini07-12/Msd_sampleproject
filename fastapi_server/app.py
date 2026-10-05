from fastapi import FastAPI
app=FastAPI()

@app.get("/getstudents")
def getstudents():
    return "get student method called"
#localhost:8000/addStudent => post
@app.post("/addStudent")
def addStudent():
    return "add student method called"
@app.put("/updatestudent")
def updatedetails():
    return "updatedetails method called"
@app.delete("/deletestudent")
def deletestudent():
    return "deletestudent method called"

