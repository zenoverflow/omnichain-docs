export function ColoredDot({ color }) {
    return (
        <div
            style={{
                display: "inline-block",
                backgroundColor: color,
                width: 10,
                height: 10,
                borderRadius: 5,
            }}
        />
    );
}
