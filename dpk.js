const crypto = require("crypto");

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

function hash(input) {
  return crypto.createHash("sha3-512").update(input).digest("hex");
}

function toString(input) {
  return typeof input === "string" ? input : JSON.stringify(input);
}

exports.deterministicPartitionKey = (event) => {
  if (!event) {
    return TRIVIAL_PARTITION_KEY;
  }

  let candidate;
  if (event.partitionKey) {
    candidate = toString(event.partitionKey);
  } else {
    candidate = hash(JSON.stringify(event));
  }
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    return hash(candidate);
  } else {
    return candidate;
  }
};
