// Update the links and card content below with your real X posts and partner details.
const SITE_CONFIG = {
  xProfileUrl: "https://x.com/",
  giveawayPostUrl: "https://x.com/",
  // Optional: replace with your Discord invite URL.
  discordUrl: ""
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

function safeUrl(url) {
  try {
    const parsed = new URL(url, window.location.href);
    return ["http:", "https:"].includes(parsed.protocol) ? parsed.href : "https://x.com/";
  } catch { return "https://x.com/"; }
}

const xUrl = safeUrl(SITE_CONFIG.xProfileUrl);
document.querySelectorAll("#xLink,#heroJoin,#bottomJoin,#footerX").forEach(link => link.href = xUrl);
document.getElementById("giveawayLink").href = safeUrl(SITE_CONFIG.giveawayPostUrl);
document.getElementById("year").textContent = new Date().getFullYear();

function renderCards(items, targetId, type) {
  const target = document.getElementById(targetId);
  if (!items.length) {
    target.innerHTML = '<div class="card"><h3>Nothing here yet</h3><p>New updates will appear here soon.</p></div>';
    return;
  }
  target.innerHTML = items.map(item => {
    const status = type === "collab" ? `<span class="status ${item.status === "Ended" ? "ended" : ""}">${item.status.toUpperCase()}</span>` : `<span class="status">THE GRIND / ${type.toUpperCase()}</span>`;
    return `<article class="card">${status}<h3>${escapeHtml(item.name || item.title)}</h3><p>${escapeHtml(item.description)}</p><a href="${safeUrl(item.link)}" target="_blank" rel="noopener noreferrer">VIEW ON X ↗</a></article>`;
  }).join("");
}
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[char]));
}
function showCollaborations(filter = "All") {
  renderCards(collaborations.filter(item => filter === "All" || item.status === filter), "collabGrid", "collaboration");
}
showCollaborations();
renderCards(founderPosts, "founderGrid", "founder");
renderCards(communityPosts, "communityGrid", "community");

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    showCollaborations(button.dataset.filter);
  });
});

document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("mainNav").classList.toggle("open");
});
document.querySelectorAll("#mainNav a").forEach(link => link.addEventListener("click", () => {
  document.getElementById("mainNav").classList.remove("open");
}));
