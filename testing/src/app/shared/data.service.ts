export class DataService {
  getDetails() {
    const reverPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data');
      }, 1500);
    });
    return reverPromise;
  }
}
