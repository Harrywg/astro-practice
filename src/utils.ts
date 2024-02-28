export const URLify = (blogName: string) => {
  return blogName.replaceAll(" ", "-").toLowerCase();
};

export const genImg = async (): Promise<string> => {
  const urlRes = await fetch("https://picsum.photos/1000/1000");
  return urlRes.url;
};
