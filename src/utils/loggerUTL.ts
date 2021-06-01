const loggerUTL = (...msgs: any): void => {
  if (process.env.NODE_ENV === 'development') console.log(...msgs);
};

export default loggerUTL;
