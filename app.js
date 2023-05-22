const express = require('express')
const app = express()
const globalErrorHandler = require("./controllers/errorController");
const morgan = require("morgan");
const cors = require("cors");
const userRouter = require('./routes/userRouter')
const AppError = require('./utils/appError')


// 1) MIDDLEWARES
if (process.env.NODE_ENV === "development") {
 app.use(morgan("dev"));
}

// app.use(compression())
app.use(cors());
app.use(express.json());
app.use(express.static(`${__dirname}/public`));


app.use("/api/v1/users", userRouter)

app.all("*", (req, res, next) =>
{
 next(new AppError(`Can't find ${req.originalUrl} with ${req.method} method on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;