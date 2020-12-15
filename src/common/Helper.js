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
    return this.convertToArray(propertyObj);
  };
  convertToArray = (p_object, drill) => {
    return Object.keys(p_object)
      .map((key) => {
        const obj = {};
        obj.label = key;
        obj.value = drill ? p_object[key][drill] : p_object[key];
        return obj;
      })
      .sort((a, b) => b.value - a.value)
      .slice(0, 5);
  };
}
const HF = new HelperFunction();
export default HF;
