export const fetchBooksFromApi = (): Promise<number[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.2) {
        resolve([10, 11, 12, 13, 14]);
      } else {
        reject("Error fetching books");
      }
    }, 1000);
  });
};
