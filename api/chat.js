export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const { message } = req.body || {};
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    return res.status(200).json({
      reply: "You said: " + message
    });

  } catch (err) {
    return res.status(500).json({ error: "Server error", details: err.toString() });
  }
}

