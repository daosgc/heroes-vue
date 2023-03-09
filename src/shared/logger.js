export const logger = {
  info(message, data) {
    console.log(`Log: ${message}`);
    if (data) {
      console.log(JSON.stringify(data, null, 2));
    }
  },
};
