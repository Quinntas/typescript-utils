require('dotenv').config();

export function getEnv(envName: string, required: boolean = true, defaultValue: string | undefined = undefined): string {
    const result = process.env[envName] as string;
    if (!result && required) throw new Error(`Environment variable ${envName} not found`);
    return result ?? defaultValue;
}