const FormatDate = (date, config) => {
  const customConfig = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };

  const options = config ? config : customConfig;
  return new Date(date).toLocaleDateString("en-US", options);
};
export default FormatDate;
