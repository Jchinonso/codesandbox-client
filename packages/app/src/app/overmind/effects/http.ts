import axios from 'axios';

export default {
  get: axios.get,
  post: axios.post,
  path: axios.patch,
  delete: axios.delete,
  put: axios.put,
  request: axios.request,
  blobToBase64: (url: string): Promise<string> =>
    fetch(url)
      .then((response) => response.blob())
      .then(
        (blob) =>
          new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = function () {
              resolve(String(this.result));
            };
            reader.onerror = reject;
            reader.readAsBinaryString(blob);
          })
      ),
};
