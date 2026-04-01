type Member = {
    member: string;
    url: string;
};

export async function initWebring(): Promise<void> {
    try {
        const parentUrl = document.referrer || document.location.href;
        const siteHost = new URL(parentUrl).hostname.toLowerCase();

        const previousBtn = document.getElementById(
            "previousBtn",
        ) as HTMLAnchorElement;
        const nextBtn = document.getElementById("nextBtn") as HTMLAnchorElement;

        const response = await fetch("https://webring.hackclub.com/members.json");
        const webring: Member[] = await response.json();

        let siteIndex = webring.findIndex(
            (member) => new URL(member.url).hostname.toLowerCase() === siteHost,
        );

        if (siteIndex === -1) siteIndex = 0;

        const previousIndex = (siteIndex - 1 + webring.length) % webring.length;
        const nextIndex = (siteIndex + 1) % webring.length;

        previousBtn.href = webring[previousIndex].url;
        previousBtn.target = "_parent";

        nextBtn.href = webring[nextIndex].url;
        nextBtn.target = "_parent";
    } catch (error) {
        console.error('Error loading webring:', error);
    }
}