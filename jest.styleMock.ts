const styles = new Proxy<Record<string, string>>(
  {},
  {
    get: (_, property) => String(property),
  }
);

export default styles;
