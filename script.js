// Replace these demo details with your real community links and project information.
const SITE_CONFIG = {
  xProfileUrl: "https://x.com/",
  giveawayPostUrl: "https://x.com/",
};

const collaborations = [
  { name: "Partner Project One", status: "Active", description: "Add a short description of this collaboration.", link: "https://x.com/" },
  { name: "Partner Project Two", status: "Active", description: "Add a short description of this collaboration.", link: "https://x.com/" },
  { name: "Past Collaboration", status: "Ended", description: "A previous community collaboration.", link: "https://x.com/" }
];

const founderPosts = [
  { title: "Founder update", description: "Add a short preview of a founder post here.", link: "https://x.com/" }
];

const communityPosts = [
  { title: "Community highlight", description: "Add a short preview of a community post here.", link: "https://x.com/" }
];

document.getElementById("xLink").href = SITE_CONFIG.xProfileUrl;
document.getElementById("giveawayLink").href = SITE_CONFIG.giveawayPostUrl;
document.getElementById("year").textContent = new Date().getFullYear();

function renderCards(items, targetId, type) {
  const target = document.getElementById(targetId);
  target.innerHTML = items.map(item => `
    <article class="card">
      ${type === "collab" ? `<span class="status ${item.status === "Ended" ? "ended" : ""}">${item.status.toUpperCase()}</span>` : `<span class="status">X COMMUNITY</span>`}
      <h3>${item.name || item.title}</h3>
      <p>${item.description}</p>
      <a href="${item.link}" target="_blank" rel="noreferrer">View on X ↗</a>
    </article>`).join("");
}
function showCollaborations(filter = "All") {
  renderCards(collaborations.filter(item => filter === "All" || item.status === filter), "collabGrid", "collab");
}
showCollaborations();
renderCards(founderPosts, "founderGrid", "post");
renderCards(communityPosts, "communityGrid", "post");

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    showCollaborations(button.dataset.filter);
  });
});