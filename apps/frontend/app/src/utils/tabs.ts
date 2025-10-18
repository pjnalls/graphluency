export const matchRoute = (path: string, routeName?: string) => {
  if (routeName === 'index') {
    return path === '/';
  } else {
    return path === `/${routeName}`;
  }
};
