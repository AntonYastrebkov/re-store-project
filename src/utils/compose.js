
const compose = (...fcns) => (component) => {
  return fcns.reduceRight((wrapped, f) => f(wrapped), component);
};

export default compose;