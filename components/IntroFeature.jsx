import * as ICONS from "@ant-design/icons";

export function IntroFeature({ iconName, children }) {
    const Icon = ICONS[iconName];
    return (
        <div
            style={{
                justifySelf: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Icon
                style={{
                    fontSize: "42px",
                    display: "inline",
                    marginRight: "10px",
                }}
            />
            {children}
        </div>
    );
}
