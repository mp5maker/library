declare namespace NodeJS {
  export interface ProcessEnv {
    DATABASE_URL: string;
    REDIS_URL: string;
    PORT: string;
    SESSION_SECRET: string;
    CORS_ORIGIN: string;
    TYPEORM_CONNECTION: string;
    TYPEORM_HOST: string;
    TYPEORM_USERNAME: string;
    TYPEORM_PASSWORD: string;
    TYPEORM_DATABASE: string;
    TYPEORM_PORT: string;
    TYPEORM_ENTITIES: string;
    TYPEORM_MIGRATIONS: string;
  }
}
