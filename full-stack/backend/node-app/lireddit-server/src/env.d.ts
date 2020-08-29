declare namespace NodeJS {
  export interface ProcessEnv {
    DATABASE_URL: string;
    REDIS_URL: string;
    PORT: string;
  }
}
