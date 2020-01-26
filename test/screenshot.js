const puppeteer = require("puppeteer");

function delay(time) {
   return new Promise(function(resolve) { 
       setTimeout(resolve, time)
   });
}

(async function() {
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
  await page.goto("http://server:1234/Hello");
  await delay(5000);
  await page.screenshot({ path: "./screenshots/Hello.png" });
  await page.close();
  await browser.close();
})();
