/**
 * Logic for parsing config files.
 */
import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.resolve(__dirname, "../.env") });

interface ENV {
    EXAMPLE: string | undefined;
}

interface Config {
    EXAMPLE: string;
}

const getConfig = (): ENV => {
  return {
    EXAMPLE: process.env.EXAMPLE,
  };
};

const getSanitzedConfig = (config: ENV): Config => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in .env`);
    }
  }
  return config as Config;
};

const config = getConfig();

const sanitizedConfig = getSanitzedConfig(config);

export default sanitizedConfig;
