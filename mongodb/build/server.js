import express from 'express';
const port = process.env.PORT || 3000;
const app = express();
app.listen(port, () => {
    console.info(`Server is started at 0.0.0.0:${port}`);
});
