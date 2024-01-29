
const loadPodcasts = async () => {
    try {
        const response = await fetch(
            "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
        );
        const api = await response.json();
        return api.feed.entry;
    } catch (error) {
        console.error("Error:", error);
    }
};

export { loadPodcasts }