export const token: string = process.env["BOT_TOKEN"];
export const owners: string[] = process.env["OWNERS"].split(",");
export const prefix: string = process.env["PREFIX"];
export const autoUpdate: boolean = Boolean(process.env["AUTO_UPDATE"]);
const parseInterval: number = Number(process.env["UPDATE_INTERVAL"]);
export const updateInterval: number = isNaN(parseInterval) ? 15000 : parseInterval;