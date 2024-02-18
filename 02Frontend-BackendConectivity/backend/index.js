import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("server is ready")
});

app.get("/api/jokes", (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "The Dizzy Bee",
            content: "Why did the bee get dizzy? Because it kept buzzing around in circles!"
        },
        {
            id: 2,
            title: "The Forgetful Actor",
            content: "Why did the actor break up with the actress? Because he couldn't remember his lines, but she always remembered his mistakes!"
        },
        {
            id: 3,
            title: "The Tea Bag",
            content: "Why did the tea bag go to school? Because it wanted to be steeped in history!"
        },
        {
            id: 4,
            title: "The Talkative Coffee",
            content: "Why did the coffee file a police report? It got mugged!"
        },
        {
            id: 5,
            title: "The Musical Fruit",
            content: "Why don't beans ever get lonely? Because they always hang out in a pod!"
        }
    ];
    res.send(jokes)
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`)
})