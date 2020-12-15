class HelperFunction {
  getMostUsedList = (repos, property, increamentProperty) => {
    const propertyObj = repos.reduce((propertyObj, currRepository) => {
      const propertyValue = currRepository[property];
      if (!propertyValue) return propertyObj;
      if (propertyObj.hasOwnProperty(propertyValue)) {
        const increament = currRepository[increamentProperty];
        propertyObj[propertyValue] += increament != undefined ? increament : 1;
      } else propertyObj[propertyValue] = 0;
      return propertyObj;
    }, {});
    return Object.keys(propertyObj)
      .map((key) => {
        const obj = {};
        obj.label = key;
        obj.value = propertyObj[key];
        return obj;
      })
      .sort((a, b) => b.value - a.value)
      .slice(0, 5);
  };
}
const HF = new HelperFunction();
export default HF;
