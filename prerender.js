import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, 'dist');

const routes = [
    '/',
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
    '/courses/globalpro',
    '/courses/c-pro',
    '/courses/c-pat',
    '/careers',
    '/contact',
    '/calculator',
];

// Helper to extract top-level keys from JS/JSX data files
function extractKeys(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        // Match keys with 4 spaces indentation at start of lines (top level keys in our exported objects)
        const regex = /^ {4}['"]([^'"]+)['"]\s*:\s*\{/gm;
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

// Dynamically add all dynamic sub-service and location routes
const locationKeys = extractKeys(path.join(__dirname, 'src', 'data', 'locationData.js'));
locationKeys.forEach(key => routes.push(`/accounting-service-in-${key}`));

const gstKeys = extractKeys(path.join(__dirname, 'src', 'data', 'gstServices.jsx'));
gstKeys.forEach(key => routes.push(`/services/gst/${key}`));

const auditKeys = extractKeys(path.join(__dirname, 'src', 'data', 'auditingServices.jsx'));
auditKeys.forEach(key => routes.push(`/services/auditing/${key}`));

const mcaKeys = extractKeys(path.join(__dirname, 'src', 'data', 'mcaServices.jsx'));
mcaKeys.forEach(key => routes.push(`/services/advisory/${key}`));

const loanKeys = extractKeys(path.join(__dirname, 'src', 'data', 'loanDetails.js'));
loanKeys.forEach(key => routes.push(`/services/business-loans/${key}`));

console.log(`Loaded ${routes.length} total routes for pre-rendering.`);

async function prerender() {
    console.log('Starting pre-rendering...');
    const browser = await puppeteer.launch({
        headless: "new",
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();

    // We need to serve the dist folder. 
    // For simplicity, we can use a local file server or assume 'vite preview' is running.
    // But starting vite preview from node is tricky.
    // Easier approach: Use a static file server library or just Puppeteer with file:// protocol?
    // file:// protocol won't match routes defined in React Router (e.g. /about).

    // We will assume the user or script starts a server. 
    // Or we can start 'vite preview' in a child process.

    // Let's rely on a simpler approach: 
    // We'll use 'preview' command in parallel? No.
    // Let's spawn 'npm run preview' and wait for it.

    const { spawn } = await import('child_process');
    const server = spawn(/^win/.test(process.platform) ? 'npm.cmd' : 'npm', ['run', 'preview', '--', '--port', '4173'], {
        stdio: 'pipe',
        shell: true
    });

    // Wait for server to start
    await new Promise((resolve) => {
        server.stdout.on('data', (data) => {
            if (data.toString().includes('Local:')) {
                resolve();
            }
        });
        // Fallback timeout
        setTimeout(resolve, 5000);
    });

    console.log('Server started, rendering routes...');
    const baseUrl = 'http://localhost:4173';

    for (const route of routes) {
        try {
            console.log(`Rendering ${route}...`);
            await page.goto(`${baseUrl}${route}`, { waitUntil: 'networkidle0' });

            // Wait for a bit more to ensure Helmet has applied changes
            await new Promise(r => setTimeout(r, 500));

            const content = await page.content();

            // Post-process: fix paths if needed, though they should be fine.
            // Replace localhost with production URL for canonicals if they were absolute local
            // But our SEO component uses absolute prod URLs so it should be fine.

            // Define output path
            const routePath = route === '/' ? '/index.html' : `${route}/index.html`;
            const filePath = path.join(distDir, routePath);

            // Ensure dir exists
            fs.mkdirSync(path.dirname(filePath), { recursive: true });

            fs.writeFileSync(filePath, content);
            console.log(`Saved ${filePath}`);
        } catch (e) {
            console.error(`Error rendering ${route}:`, e);
        }
    }

    await browser.close();
    server.kill();
    console.log('Pre-rendering complete.');
    process.exit(0);
}

prerender();
