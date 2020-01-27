const path = require("path");
const fs = require("fs");
const klawSync = require("klaw-sync");

const { toMatchImageSnapshot } = require("jest-image-snapshot");

expect.extend({ toMatchImageSnapshot });

describe("visual-regression", () => {
  const pendingScreenshots = path.resolve(__dirname, "./.screenshots");
  fs.statSync(pendingScreenshots); // error if it doesn't exists

  klawSync(pendingScreenshots, { nodir: true }).forEach(file => {
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
