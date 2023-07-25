export default function MyBreakLine() {
    let breakLines: any[] = []
    for (let index = 0; index < 50; index++) {
        breakLines = breakLines.concat(<br key={index} />)
    }
    return (
        <div>
            {breakLines}
        </div>
    );
}