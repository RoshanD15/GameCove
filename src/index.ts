import express from "express";
import { PrismaClient } from "@prisma/client";
import bodyParser from "body-parser";
import cors from "cors";

const prisma = new PrismaClient();
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Health check
app.get("/", (_, res) => res.send("GameCove API running!"));

// Get all games
app.get("/games", async (_, res) => {
  const games = await prisma.game.findMany({ include: { user: true } });
  res.json(games);
});

// Create a new game
app.post("/games", async (req, res) => {
  const { title, slug, description, priceCents, coverUrl, userId } = req.body;
  const game = await prisma.game.create({
    data: { title, slug, description, priceCents, coverUrl, userId },
  });
  res.json(game);
});

const PORT = 3000;
// ===== Recommendations =====
app.get("/recommendations", async (_req, res) => {
  try {
    // Group activities by game to count how many times each was interacted with
    const grouped = await prisma.userActivity.groupBy({
      by: ["gameId"],
      _count: { gameId: true },
      orderBy: { _count: { gameId: "desc" } },
      take: 6,
    });

    // Collect top game IDs
    const ids = grouped.map(g => g.gameId);

    // Fetch the actual game info
    const games = ids.length
      ? await prisma.game.findMany({ where: { id: { in: ids } } })
      : await prisma.game.findMany({ orderBy: { createdAt: "desc" }, take: 6 });

    res.json(games);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch recommendations" });
  }
});
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));