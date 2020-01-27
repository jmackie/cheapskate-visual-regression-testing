const puppeteer = require("puppeteer");

function delay(time) {
  return new Promise(function(resolve) {
    setTimeout(resolve, time);
  });
}

async function main() {
  const browser = await puppeteer.launch({
    args: [
      // Required for Docker version of Puppeteer
      "--no-sandbox",
      "--disable-setuid-sandbox",
      // This will write shared memory files into /tmp instead of /dev/shm,
      // because Docker’s default for /dev/shm is 64MB
      "--disable-dev-shm-usage"
    ]
  });

  const page = await browser.newPage();

  page.on("pageerror", err => {
    console.log(err);
    process.exit(2);
  });

  await page.goto("http://server:1234/?component=Hello");
  await delay(1000); // load

  await page.setViewport(Object.assign(page.viewport(), { width: 1200 }));
  await page.screenshot({ path: "./screenshots/Hello_1200.png" });
  await page.setViewport(Object.assign(page.viewport(), { width: 700 }));
  await page.screenshot({ path: "./screenshots/Hello_700.png" });
  await page.setViewport(Object.assign(page.viewport(), { width: 400 }));
  await page.screenshot({ path: "./screenshots/Hello_400.png" });

  await page.close();
  await browser.close();
}

main();
