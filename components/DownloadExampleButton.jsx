import Link from "next/link";
import { useCallback } from "react";

export function DownloadExampleButton({ title, fileUrl, fileName }) {
    const handleDownload = useCallback(() => {
        // Create a link element
        const link = document.createElement("a");
        link.href = fileUrl;

        // Set the file name for the download
        link.download = fileName;

        // Append to body, click, and remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, [fileUrl, fileName]);

    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div
                onClick={handleDownload}
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
            </div>
        </div>
    );
}
