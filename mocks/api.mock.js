const range = n => [...Array(n).keys()];

const fetchList = () => {
  return Promise.resolve({
    response: {
      results: range(10).map(i => ({
        firstName: `https://abc${i}.com`,
        webTitle: `Some Title ${i}`
      }))
    }
  });
};

export default fetchList;