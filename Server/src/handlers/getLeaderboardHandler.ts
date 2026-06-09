import { db } from "../repository"

export const getLeaderboardHandler = () => {
  return db.getAll();
}
