export default function MyBreakLine() {
    let breakLines: any[] = []
    for (let index = 0; index < 50; index++) {
        breakLines = breakLines.concat(<br />)
    }
    return (
        <div>
            {breakLines}
        </div>
    );
}