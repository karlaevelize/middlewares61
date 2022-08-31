const express = require("express");
const userRouter = require("./routers/userRouter")

const PORT = 4000;

const app = express();

app.use(express.json()); //parse the body

//MIDDLEWARES
//1. Function that gets called before the endpoint
const myMiddleware = (request, response, next) => {
  console.log("in middleware")
  next()
}

app.use(myMiddleware)

//random authorized
const randomMiddleware = (request, response, next) => {
  const randomNumber = Math.random() * 10
  console.log("number", randomNumber)
  if (randomNumber < 5) {
    next()
  } else {
    response.status(402).send("Not authorized")
  }
}

//routers
app.use("/users", userRouter)


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
