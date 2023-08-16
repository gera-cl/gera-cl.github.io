import React from 'react';

interface Props {
    lines?: number;
}

const MyBreakLine: React.FC<Props> = ({ lines = 50 }) => {
    const breakLines: JSX.Element[] = [];

    for (let index = 0; index < lines; index++) {
        breakLines.push(<br key={index} />);
    }

    return <div>{breakLines}</div>;
};

export default MyBreakLine;