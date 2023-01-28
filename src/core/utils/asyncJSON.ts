export default class asyncJSON {
  public static parse = (jsonString: string) => {
    return new Promise((resolve, reject) => {
      try {
        resolve(JSON.parse(jsonString));
      } catch (error) {
        reject(error);
      }
    });
  };
}
