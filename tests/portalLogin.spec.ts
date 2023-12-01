import { test, expect } from '@playwright/test';

test('test', async ({ page,context }) => {
  //await context.tracing.start({snapshots:true,screenshots:true})
  await page.goto('https://mfa-portal.services.dev.smg.com/');
  //await page.goto('https://dev-smgportal.us.auth0.com/u/login/identifier?state=hKFo2SBoZVRzM3lBeW53SFVmak0yakN1M1ROZno0MnM3eXN5SqFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIE1TQUdMXzBmNTFYSHZyRldJSXNqOHY2V2czRjZKMm1ro2NpZNkgMnNSYTdmZW8yVE43enJGQWtHRERDTEdHMWN4ZG9TcHc');
  await page.getByLabel('Email address').fill('balaji.kanthimathinathan@smg.com');
  await page.getByRole('button', { name: 'Continue' }).click();
  //await context.tracing.stop({path:'traceTest.zip'});
});