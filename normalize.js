const fs = require("fs");
const dataArr = [];
const grouper = {};

try {
  const data = JSON.parse(fs.readFileSync("./addresses.json", "utf8"));
  dataArr.push(...data);
} catch (err) {
  console.error(err);
}

dataArr.forEach(({ address }) => {
  grouper[address] = grouper[address] + 1 || 1;
});

try {
  fs.writeFileSync(
    `./normalizedAddresses.json`,
    JSON.stringify(grouper, null, 2)
  );
  //file written successfully
} catch (err) {
  console.error(err);
}
