import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import http from 'http';
import { fileURLToPath } from 'url';
import { cityContent } from './src/data/locationData.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, 'dist');

const routes = [
    '/',
    '/accounting-service-in-kozhikode',
    '/about',
    '/services',
    '/services/accounting',
    '/services/accounting/bookkeeping',
    '/services/accounting/financial-statements',
    '/services/accounting/cash-flow',
    '/services/accounting/management-reports',
    '/services/accounting/reconciliations',
    '/services/taxation',
    '/services/taxation/tds-tcs',
    '/services/taxation/tax-planning',
    '/services/taxation/notice-responses',
    '/services/auditing',
    '/services/gst',
    '/services/business-consulting',
    '/services/advisory',
    '/services/business-loans',
    '/courses',
    '/careers',
    '/contact',
    '/calculator',
];

// Helper to extract top-level keys from JS/JSX data files
function extractKeys(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        // Match keys with 4 spaces indentation at start of lines
        const regex = /^ {4}['"]?([a-zA-Z0-9_-]+)['"]?\s*:\s*\{/gm;
        const keys = [];
        let match;
        while ((match = regex.exec(content)) !== null) {
            keys.push(match[1]);
        }
        return keys;
    } catch (e) {
        console.error(`Error reading keys from ${filePath}:`, e);
        return [];
    }
}

// Dynamically add all location routes from locationData.js
Object.keys(cityContent).forEach(key => routes.push(`/accounting-service-in-${key}`));
routes.push('/accounting-service-in-mangaluru');
routes.push('/accounting-service-in-coimbatore');

const gstKeys = extractKeys(path.join(__dirname, 'src', 'data', 'gstServices.jsx'));
gstKeys.forEach(key => routes.push(`/services/gst/${key}`));

const auditKeys = extractKeys(path.join(__dirname, 'src', 'data', 'auditingServices.jsx'));
auditKeys.forEach(key => routes.push(`/services/auditing/${key}`));

const mcaKeys = extractKeys(path.join(__dirname, 'src', 'data', 'mcaServices.jsx'));
mcaKeys.forEach(key => routes.push(`/services/advisory/${key}`));

const loanKeys = extractKeys(path.join(__dirname, 'src', 'data', 'loanDetails.js'));
loanKeys.forEach(key => routes.push(`/services/business-loans/${key}`));

const uniqueRoutes = Array.from(new Set(routes));
console.log(`Loaded ${uniqueRoutes.length} total routes for pre-rendering.`);

async function prerender() {
    console.log('Starting pre-rendering...');

    const spaShell = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');

    const server = http.createServer((req, res) => {
        const urlPath = decodeURIComponent(req.url.split('?')[0]);
        let filePath = path.join(distDir, urlPath.startsWith('/') ? urlPath.substring(1) : urlPath);

        if (urlPath === '/' || urlPath === '') {
            filePath = path.join(distDir, 'index.html');
        }

        if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
            const ext = path.extname(filePath).toLowerCase();
            const contentTypeMap = {
                '.html': 'text/html; charset=utf-8',
                '.js': 'text/javascript; charset=utf-8',
                '.mjs': 'text/javascript; charset=utf-8',
                '.css': 'text/css; charset=utf-8',
                '.json': 'application/json',
                '.png': 'image/png',
                '.jpg': 'image/jpeg',
                '.jpeg': 'image/jpeg',
                '.webp': 'image/webp',
                '.svg': 'image/svg+xml',
                '.pdf': 'application/pdf',
                '.woff': 'font/woff',
                '.woff2': 'font/woff2',
                '.ttf': 'font/ttf',
            };
            res.writeHead(200, { 'Content-Type': contentTypeMap[ext] || 'application/octet-stream' });
            res.end(fs.readFileSync(filePath));
        } else if (urlPath.startsWith('/assets/') || path.extname(urlPath)) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Asset Not Found');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(spaShell);
        }
    });

    await new Promise((resolve) => server.listen(0, resolve));
    const port = server.address().port;
    const baseUrl = `http://localhost:${port}`;
    console.log(`Static server started at ${baseUrl}`);

    const browser = await puppeteer.launch({
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-gpu'
        ]
    });
    const page = await browser.newPage();
    page.on('pageerror', err => console.error('PAGE ERROR:', err.toString()));

    let rootContent = null;

    for (const route of uniqueRoutes) {
        try {
            console.log(`Rendering ${route}...`);
            await page.goto(`${baseUrl}${route}`, { waitUntil: 'networkidle0' });

            // Wait for React lazy component and Helmet to mount
            try {
                await page.waitForSelector('h1', { timeout: 10000 });
            } catch (err) {
                console.error(`Timeout waiting for h1 on ${route}:`, err.message);
            }
            await new Promise(r => setTimeout(r, 500));

            const content = await page.content();

            if (route === '/') {
                rootContent = content;
            } else {
                const filePath = path.join(distDir, route, 'index.html');
                fs.mkdirSync(path.dirname(filePath), { recursive: true });
                fs.writeFileSync(filePath, content);
                console.log(`Saved ${filePath}`);
            }
        } catch (e) {
            console.error(`Error rendering ${route}:`, e);
        }
    }

    if (rootContent) {
        fs.writeFileSync(path.join(distDir, 'index.html'), rootContent);
        console.log(`Saved root index.html`);
    }

    await browser.close();
    server.close();
    console.log('Pre-rendering complete.');
    process.exit(0);
}

prerender();
