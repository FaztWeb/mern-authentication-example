export const register = async () => {
  const res = await fetch("/api");
  await res.json();
};
