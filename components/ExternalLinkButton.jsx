export function ExternalLinkButton({ title, url }) {
    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <a
                href={url}
                target="_blank noopener noreferrer"
                style={{
                    display: "inline-block",
                    padding: "0.5rem 1rem",
                    backgroundColor: "#0070f3",
                    color: "white",
                    borderRadius: "5px",
                    textDecoration: "none",
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    marginTop: "1rem",
                    marginBottom: "1rem",
                    cursor: "pointer",
                }}
            >
                {title}
            </a>
        </div>
    );
}
