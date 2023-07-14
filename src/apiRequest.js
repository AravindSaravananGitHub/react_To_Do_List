const apiRequest = async (url = "", optionObject = null, errMeg = null) => {
  try {
    const response = await fetch(url, optionObject);
    if (!response.ok) throw Error("Please Reload the App....!");
  } catch (err) {
    errMeg = err.Message;
  } finally {
    return errMeg;
  }
};
export default apiRequest;
