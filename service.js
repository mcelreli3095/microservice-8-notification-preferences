const express = require("express");
const app = express();
app.use(express.json());

const preferences = {}; // in-memory

// Update preferences
app.post("/updatePreferences", (req, res) => {
    const { userId, email, frequency, categories } = req.body;

    if (!userId) return res.status(400).json({ error: "Missing userId" });
    if (typeof email !== "boolean") return res.status(400).json({ error: "Email must be boolean" });
    if (!frequency) return res.status(400).json({ error: "Missing frequency" });
    if (!Array.isArray(categories)) return res.status(400).json({ error: "Categories must be array" });

    preferences[userId] = { email, frequency, categories };
    res.json({ success: true, preferences: preferences[userId] });
});

// Retrieve preferences
app.get("/getPreferences/:userId", (req, res) => {
    const userId = req.params.userId;

    if (!preferences[userId]) {
        return res.status(404).json({ error: "User not found" });
    }

    res.json(preferences[userId]);
});

app.listen(3008, () => console.log("Microservice 8 running on port 3008"));
