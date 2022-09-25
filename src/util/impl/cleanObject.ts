function cleanObject(obj: {[x:string]: any}) {
  const res = { ...obj };
  Object.keys(res).forEach((key) => {
    if (res[key] === undefined || res[key] === "") {
      delete res[key];
    }
  });
  return res;
}

export default cleanObject;
