import path from 'path';
import test from '@playwright/test';
import dotenv from 'dotenv';

const requestedEnv = (process.env.envFileName || process.env.ENVIRONMENT || 'QA').toString().trim();
const normalizedEnv = requestedEnv.replace(/^LF_/i, '').toUpperCase();
const supportedEnvs = ['QA', 'PROD'];
const envFileName = supportedEnvs.includes(normalizedEnv) ? normalizedEnv : 'QA';
const envFilePath = path.resolve(__dirname, '../../data', `LF_${envFileName}.env`);
const result = dotenv.config({ path: envFilePath });

if (result.error) {
  console.error(`❌ Failed to load env file: ${envFilePath}`);
} else {
  console.log(`✅ Loaded env file: ${envFilePath}`);
}

console.log(`Selected environment: ${envFileName}`);
console.log(`base url is ${process.env.BASEURL}`);
console.log(`username is ${process.env.ADMIN_USERNAME}`);
console.log(`password is ${process.env.ADMIN_PASSWORD}`);

const url = process.env.BASEURL?.trim() || '';
const uname = process.env.ADMIN_USERNAME?.trim() || '';
const pword = process.env.ADMIN_PASSWORD?.trim() || '';

test('Learn to load the configuration environment using env', async ({ page }) => {
  if (!url || !uname || !pword) {
    throw new Error(`Missing environment values. Check ${envFilePath}`);
  }

  await page.goto(url);
  await page.locator('#username').fill(uname);
  await page.waitForTimeout(2000);
  const label = await page.locator('label[for="password"]').innerText();
  console.log(label);
  await page.locator('.inputLogin').last().fill(pword);
  await page.locator('.decorativeSubmit').click();
  await page.locator('#label>a').click();
});

// To set the environment variable in terminal:
// macOS/Linux: envFileName=QA npx playwright test tests/Day12/learnEnvPar.spec.ts
// macOS/Linux: envFileName=PROD npx playwright test tests/Day12/learnEnvPar.spec.ts
// PowerShell: $env: envFileName="QA"
// PowerShell: $env:envFileName="PROD"