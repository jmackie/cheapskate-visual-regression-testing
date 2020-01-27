// jest entrypoint

const path = require("path");
const fs = require("fs");
const klawSync = require("klaw-sync");

const { toMatchImageSnapshot } = require("jest-image-snapshot");

expect.extend({ toMatchImageSnapshot });

describe("visual-regression", () => {
  const latestScreenshots = path.resolve(__dirname, "./latest-screenshots");
  fs.statSync(latestScreenshots); // error if it doesn't exist

  klawSync(latestScreenshots, { nodir: true }).forEach(file => {
    if (!file.path.endsWith("png")) {
      return;
    }

    test(path.basename(file.path), () => {
      const image = fs.readFileSync(file.path);
      expect(image).toMatchImageSnapshot({
        customSnapshotsDir: path.resolve(__dirname, "./screenshots"),
        customSnapshotIdentifier: () => path.basename(file.path)
      });
    });
  });
});
