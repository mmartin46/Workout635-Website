import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import child_process from 'child_process';

const isBuild = process.argv.includes('build') || process.env.NODE_ENV === 'production';
let serverConfig = {};


if (!isBuild) {
    const baseFolder =
        process.env.APPDATA !== undefined && process.env.APPDATA !== ''
            ? `${process.env.APPDATA}/ASP.NET/https`
            : `${process.env.HOME}/.aspnet/https`;

    const certificateArg = process.argv.map(arg => arg.match(/--name=(?<value>.+)/i)).filter(Boolean)[0];
    const certificateName = certificateArg ? certificateArg.groups.value : "nextsite.client";

    if (certificateName) {

        const certFilePath = path.join(baseFolder, `${certificateName}.pem`);
        const keyFilePath = path.join(baseFolder, `${certificateName}.key`);

        if (!fs.existsSync(certFilePath) || !fs.existsSync(keyFilePath)) {
            try {
                const result = child_process.spawnSync('dotnet', [
                    'dev-certs',
                    'https',
                    '--export-path',
                    certFilePath,
                    '--format',
                    'Pem',
                    '--no-password',
                ], { stdio: 'inherit'});

                if (result.status !== 0) {
                    console.warn('Could not create certificate...');
                }
            } catch (error) {
                console.warn('dotnet not available...');
            }
        }

        if (fs.existsSync(certFilePath) && fs.existsSync(keyFilePath)) {
            serverConfig = {
                proxy: {
                    '^/weatherforecast': {
                        target: 'https://localhost:7118/',
                        secure: false
                    }
                },
                port: 5173,
                https: {
                    key: fs.readFileSync(keyFilePath),
                    cert: fs.readFileSync(certFilePath)
                }
            };
        } else {
            serverConfig = {
                proxy: {
                    '^/weatherforecast': {
                        target: 'https://localhost:7118/',
                        secure: false
                    }
                },
                port: 5173
            }
        }
    }
}
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [plugin()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: serverConfig
})
