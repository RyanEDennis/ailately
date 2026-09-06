// A first-party, link-only card pointing to the author's X profile.
// No third-party scripts, iframes, or network calls — the card is a link.

export default function XFeed({ handle }: { handle: string }) {
  return (
    <a
      href={`https://x.com/${handle}`}
      target="_blank"
      rel="noopener"
      className="x-card sans"
      aria-label={`Open @${handle} on X`}
    >
      <span className="x-card__mark" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
        </svg>
      </span>
      <span className="x-card__body">
        <span className="x-card__handle">@{handle}</span>
        <span className="x-card__cta">Read the latest on X <span aria-hidden="true">↗</span></span>
      </span>
    </a>
  );
}
