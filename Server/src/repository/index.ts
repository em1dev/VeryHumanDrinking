import fs from 'fs';
import { EntryEntity, LeadearboardEntry } from "../schema";
import { config } from '../config';

let data: Array<EntryEntity> = [];

if (fs.existsSync(config.DB_FILE_PATH)) {
  const loadedFile = fs.readFileSync(config.DB_FILE_PATH, { encoding: 'utf-8' });
  data = JSON.parse(loadedFile);
}

const addEntry = (entry: LeadearboardEntry) => {
  data.push({
    id: crypto.randomUUID(),
    ...entry,
  });
  data.sort((a,b) => b.score - a.score);
  save();
}

const deleteEntry = (id: string) => {
  data = data.filter((item) => item.id !== id);
  save();
}

const getAll = () => {
  return data;
}

const save = () => {
  fs.writeFileSync(config.DB_FILE_PATH, JSON.stringify(data), { encoding: 'utf-8' });
}

export const db = {
  deleteEntry,
  addEntry,
  getAll
}
