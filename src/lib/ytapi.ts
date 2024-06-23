// src/lib/youtubeApi.ts
async function fetchSubscriberCount(channelId: string): Promise<number> {
  const apiKey = import.meta.env.VITE_YtA;
  const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.items[0].statistics.subscriberCount;
}

async function getAPI() {
  const apK = import.meta.env.VITE_YtA;
  return apK
}

export { fetchSubscriberCount , getAPI };