import "./Drawing.css";
const drawing = (
    <>
        <div className="drawing-container-svg">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 195 195"
                className="drawing"
            >
                <title>svg circle</title>
                {/* <g id="background-svg">
                    <circle
                        pathLength="1"
                        className="cls-2"
                        cx="97.5"
                        cy="97.5"
                        r="95"
                    />
                </g> */}
                <g id="body-svg">
                    <path
                        className="cls-2"
                        pathLength="1"
                        vectorEffect="non-scaling-stroke"
                        d="M162.81,162.71c-1-6.26-3-8.22-5.64-12.52s-8.65-10.47-8.65-10.47-2.15-2.38-2.91-.9-2-.82-2-.82c-.91-6.35-2.3-6.06-2.3-6.06s-10.7-4.69-11.61-5.07a1.37,1.37,0,0,0-1.53.33l-.71-.38c-1.53-5.64-4-7.88-6-8.79a3.62,3.62,0,0,1-2-3.15l.24-3.92a66.93,66.93,0,0,0,4.63-6.45l2.11-.63c6.45-3,7-7.27,7-7.27L135,98.25s2.22,2.89,2.53.38c1-7.83,3.39-10.73,3.39-10.73l.15-1.08L139.92,84a5.76,5.76,0,0,1,.86-5.5S144,67,137.1,57.77s-13.81-8.6-13.81-8.6-5.16-4.78-10.27-5.93-16.3,1.25-25.23,5.21S73.74,66.56,73.4,72.92a132,132,0,0,1-1.82,14.35s.34.08,1,2.52,2.87,5.25,4.63,5.4a1.89,1.89,0,0,1,1.73,2s1,9.22,1.4,12.95-.58,3.22-.58,3.22c-12.06-2.86-17.69,12-17.69,12H60.43c-3.8-.57-10.75,3.16-11.74,3.82s-.47,2.71-.47,2.71c-8-.48-15.68,6.11-17.87,9.94C29.07,144,25.6,149.29,22,154.34a95,95,0,0,0,141.57,15.71C163.33,167.07,163.08,164.4,162.81,162.71Z"
                        transform="translate(-2.21 -2.21)"
                    />
                </g>
                <g id="outline2-svg">
                    <path
                        className="cls-2"
                        pathLength="1"
                        vectorEffect="non-scaling-stroke"
                        d="M162.81,162.71c-1-6.26-3-8.22-5.64-12.52s-8.65-10.47-8.65-10.47-2.15-2.38-2.91-.9-2-.82-2-.82c-.91-6.35-2.3-6.06-2.3-6.06s-10.7-4.69-11.61-5.07a1.37,1.37,0,0,0-1.53.33l-.71-.38c-1.53-5.64-4-7.88-6-8.79a3.62,3.62,0,0,1-2-3.15l.24-3.92a66.93,66.93,0,0,0,4.63-6.45l2.11-.63c6.45-3,7-7.27,7-7.27L135,98.25s2.22,2.89,2.53.38c1-7.83,3.39-10.73,3.39-10.73l.15-1.08L139.92,84a5.76,5.76,0,0,1,.86-5.5S144,67,137.1,57.77s-13.81-8.6-13.81-8.6-5.16-4.78-10.27-5.93-16.3,1.25-25.23,5.21S73.74,66.56,73.4,72.92a132,132,0,0,1-1.82,14.35s.34.08,1,2.52,2.87,5.25,4.63,5.4a1.89,1.89,0,0,1,1.73,2s1,9.22,1.4,12.95-.58,3.22-.58,3.22c-12.06-2.86-17.69,12-17.69,12H60.43c-3.8-.57-10.75,3.16-11.74,3.82s-.47,2.71-.47,2.71c-8-.48-15.68,6.11-17.87,9.94C29.07,144,25.6,149.29,22,154.34a95,95,0,0,0,141.57,15.71C163.33,167.07,163.08,164.4,162.81,162.71Z"
                        transform="translate(-2.21 -2.21)"
                    />
                </g>
                <g id="linework-svg">
                    <path
                        className="cls-1"
                        vectorEffect="non-scaling-stroke"
                        pathLength="1"
                        d="M71.92,85.24s.33,1.92,4.17,2,7.06-7.35,7-10.36"
                        transform="translate(-2.21 -2.21)"
                    />
                    <path
                        className="cls-1"
                        vectorEffect="non-scaling-stroke"
                        pathLength="1"
                        d="M77.77,77.05a18.16,18.16,0,0,0,3.77-.14c1.07-.29,6.74-2,8.78-6.06s2.4-4.94,2.51-7.6a16.77,16.77,0,0,1,4.85-10.54c3.25-3,11.18-4.26,16.7-.36"
                        transform="translate(-2.21 -2.21)"
                    />
                    <path
                        className="cls-1"
                        vectorEffect="non-scaling-stroke"
                        pathLength="1"
                        d="M96.08,58.51A22,22,0,0,1,107.5,55.6c7.12,0,11.32,1.79,12.16,3.41"
                        transform="translate(-2.21 -2.21)"
                    />
                    <path
                        className="cls-1"
                        vectorEffect="non-scaling-stroke"
                        pathLength="1"
                        d="M120.28,61.21a7.24,7.24,0,0,0,3-4.54c.65-3.13.68-6.72-.28-7.79"
                        transform="translate(-2.21 -2.21)"
                    />
                    <path
                        className="cls-1"
                        vectorEffect="non-scaling-stroke"
                        pathLength="1"
                        d="M129.41,88.35a26,26,0,0,0,2.22,4.57,26.74,26.74,0,0,1,1.78,3"
                        transform="translate(-2.21 -2.21)"
                    />
                    <path
                        className="cls-1"
                        vectorEffect="non-scaling-stroke"
                        pathLength="1"
                        d="M139.73,80.71a12.59,12.59,0,0,1-3.06,3.89,18.92,18.92,0,0,0-2.21,1.9,3,3,0,0,0-.27.35"
                        transform="translate(-2.21 -2.21)"
                    />
                    <line
                        className="cls-1"
                        vectorEffect="non-scaling-stroke"
                        pathLength="1"
                        x1="132.27"
                        y1="86.15"
                        x2="132.25"
                        y2="84.3"
                    />
                    <path
                        className="cls-1"
                        vectorEffect="non-scaling-stroke"
                        pathLength="1"
                        d="M92.68,69.38a18.81,18.81,0,0,1,6,.5,19.18,19.18,0,0,1,3.22,1.4s1,.72,1,1.58-.25,1-1,1a12.39,12.39,0,0,1-2.72-1.15,9.67,9.67,0,0,0-4.88-1.09l-2.9.09"
                        transform="translate(-2.21 -2.21)"
                    />
                    <path
                        className="cls-1"
                        vectorEffect="non-scaling-stroke"
                        pathLength="1"
                        d="M90.75,76.55a3.89,3.89,0,0,0,2,0,7.34,7.34,0,0,1,5.41.68c2.15,1.22,1.36.86,1.36.86"
                        transform="translate(-2.21 -2.21)"
                    />
                    <path
                        className="cls-1"
                        vectorEffect="non-scaling-stroke"
                        pathLength="1"
                        d="M112.9,81.57l2-.18a9.69,9.69,0,0,1,5.8,1.54,1.35,1.35,0,0,0,1,.1"
                        transform="translate(-2.21 -2.21)"
                    />
                    <path
                        className="cls-1"
                        vectorEffect="non-scaling-stroke"
                        pathLength="1"
                        d="M125.62,79.81l-1.91-1.67-2.21-.91a5.59,5.59,0,0,0-3.23-.57,11.89,11.89,0,0,1-3.72-.35s-1.6-.24-.83-1.28a2.67,2.67,0,0,1,1.69-.68c.71,0,4.19-.06,5.37.55a5.83,5.83,0,0,1,2.8,2.1A16.22,16.22,0,0,0,125.62,79.81Z"
                        transform="translate(-2.21 -2.21)"
                    />
                    <path
                        className="cls-1"
                        vectorEffect="non-scaling-stroke"
                        pathLength="1"
                        d="M99.82,86a6.52,6.52,0,0,0-2.41,1.71c-.57.93-.9.81-.62,2.06s2.17.7,2.17.7a1.74,1.74,0,0,1,2,.61c.85,1.08.56.67.56.67"
                        transform="translate(-2.21 -2.21)"
                    />
                    <path
                        className="cls-1"
                        vectorEffect="non-scaling-stroke"
                        pathLength="1"
                        d="M104.76,92.55a4.8,4.8,0,0,1,3.84.06"
                        transform="translate(-2.21 -2.21)"
                    />
                    <path
                        className="cls-1"
                        vectorEffect="non-scaling-stroke"
                        pathLength="1"
                        d="M91.53,97.58a28.77,28.77,0,0,1,3.93-.31,23.7,23.7,0,0,1,5.8,1,18.58,18.58,0,0,0,4.06.58c.94.12,4.33.91,5.16,1a6.62,6.62,0,0,0,2.42.22s-1.48,2.22-8.84,2C98.87,102,91.53,97.58,91.53,97.58Z"
                        transform="translate(-2.21 -2.21)"
                    />
                    <path
                        className="cls-1"
                        vectorEffect="non-scaling-stroke"
                        pathLength="1"
                        d="M78.68,96.08"
                        transform="translate(-2.21 -2.21)"
                    />
                    <path
                        className="cls-1"
                        vectorEffect="non-scaling-stroke"
                        pathLength="1"
                        d="M79.87,85l-.51,5.58a28.22,28.22,0,0,0,1,10c1.53,4.83,2,6.52,6.93,9.84,3,2,5.4,3.49,7.07,4.59s6,2,9.37,1.82a18.23,18.23,0,0,0,7.45-1.58,47.1,47.1,0,0,1,4.45-1.62c.76-.34,6.33-3.33,10.19-11.44s4-11.57,4-11.57c-3-1.32-3.25-2.35-3.16-8,.23-13.76-1.82-18.56-2.82-20.43s-2-.86-2-.86"
                        transform="translate(-2.21 -2.21)"
                    />
                    <path
                        className="cls-1"
                        vectorEffect="non-scaling-stroke"
                        pathLength="1"
                        d="M62.08,125.36s-6.38,10.51-6.1,13,2.73-.79,2.73-.79a15.71,15.71,0,0,1,8.89-4c5.55-.61,10.47.82,11.76,2.15"
                        transform="translate(-2.21 -2.21)"
                    />
                    <path
                        className="cls-1"
                        vectorEffect="non-scaling-stroke"
                        pathLength="1"
                        d="M78.31,137.26A8.59,8.59,0,0,1,82.25,140a15.52,15.52,0,0,0,3.27,3.26c.82.58,3.22,4.34,2.79,6.71"
                        transform="translate(-2.21 -2.21)"
                    />
                    <path
                        className="cls-1"
                        vectorEffect="non-scaling-stroke"
                        pathLength="1"
                        d="M76.38,117.8s-2.19,4.48-.72,7.82A19.68,19.68,0,0,0,80,132.1,49.56,49.56,0,0,1,85.19,137c3.44,3.62,5,5.38,5.34,6.62a22.47,22.47,0,0,0,1.87,4.53,9,9,0,0,1,1.93,7"
                        transform="translate(-2.21 -2.21)"
                    />
                    <path
                        className="cls-1"
                        vectorEffect="non-scaling-stroke"
                        pathLength="1"
                        d="M80.26,113a11.68,11.68,0,0,1-5,8.7"
                        transform="translate(-2.21 -2.21)"
                    />
                    <path
                        className="cls-1"
                        vectorEffect="non-scaling-stroke"
                        pathLength="1"
                        d="M119.47,114.88s-2.88,11.52-1,15.61"
                        transform="translate(-2.21 -2.21)"
                    />
                    <path
                        className="cls-1"
                        vectorEffect="non-scaling-stroke"
                        pathLength="1"
                        d="M119.24,132.57s2.33-3,0-1.86-20.94,10.74-25.1,23.45-4,15.24-4.2,19.45.49,13.18,1.1,15.16c0,0-.29,2.58.21,3.36A5.31,5.31,0,0,1,92,194.4"
                        transform="translate(-2.21 -2.21)"
                    />
                    <path
                        className="cls-1"
                        vectorEffect="non-scaling-stroke"
                        pathLength="1"
                        d="M127.5,126.82s-.52,7.43-1.84,9.94-3.55,7.89-6.56,10.11-2.12.29-2.12.29,2-5.81,2.33-7.42.72-3.19-1.79-3.28a20.53,20.53,0,0,0-10.25,3.1c-2.94,2-4.77,2.58-7.56,5.48"
                        transform="translate(-2.21 -2.21)"
                    />
                    <path
                        className="cls-1"
                        vectorEffect="non-scaling-stroke"
                        pathLength="1"
                        d="M146.36,182.48c-.45-1.27-.78-2.14-.78-2.14s-2.22-6.52-2-10.68,0-32.28,0-32.28"
                        transform="translate(-2.21 -2.21)"
                    />
                    <path
                        className="cls-1"
                        vectorEffect="non-scaling-stroke"
                        pathLength="1"
                        d="M146.36,182.48"
                        transform="translate(-2.21 -2.21)"
                    />
                    <path
                        className="cls-1"
                        vectorEffect="non-scaling-stroke"
                        pathLength="1"
                        d="M136.75,187.22"
                        transform="translate(-2.21 -2.21)"
                    />
                    <path
                        className="cls-1"
                        vectorEffect="non-scaling-stroke"
                        pathLength="1"
                        d="M128.21,127.2s-1.48,23.54.74,32.21c1.71,6.67,3.84,18.76,7.8,27.81"
                        transform="translate(-2.21 -2.21)"
                    />
                    <path
                        className="cls-1"
                        vectorEffect="non-scaling-stroke"
                        pathLength="1"
                        d="M43.8,176.52c.07-.22.15-.44.23-.66,9.65-27,4.19-44,4.19-44"
                        transform="translate(-2.21 -2.21)"
                    />
                    <path
                        className="cls-1"
                        vectorEffect="non-scaling-stroke"
                        pathLength="1"
                        d="M66.27,133.74a58.45,58.45,0,0,1-7.35,36.09c-2.32,4.07-4.44,8.29-6.33,12.39"
                        transform="translate(-2.21 -2.21)"
                    />
                    <path
                        className="cls-1"
                        vectorEffect="non-scaling-stroke"
                        pathLength="1"
                        d="M39.81,138.82a44.24,44.24,0,0,0,1.53,14.76c2.2,7.36,1.86,7.84,1.86,7.84"
                        transform="translate(-2.21 -2.21)"
                    />
                    <path
                        className="cls-1"
                        vectorEffect="non-scaling-stroke"
                        pathLength="1"
                        d="M45.45,141.73s-2.87,5-1.39,19"
                        transform="translate(-2.21 -2.21)"
                    />
                    <path
                        className="cls-1"
                        vectorEffect="non-scaling-stroke"
                        pathLength="1"
                        d="M34.41,151.72s-2.34.91,10.13,22.27"
                        transform="translate(-2.21 -2.21)"
                    />
                    <path
                        className="cls-1"
                        vectorEffect="non-scaling-stroke"
                        pathLength="1"
                        d="M95.68,171.76s-.61-1.45-1.92-.9-1.08,2.3-1.08,2.3.49,1.72,1.81.71A2.47,2.47,0,0,0,95.68,171.76Z"
                        transform="translate(-2.21 -2.21)"
                    />
                    <path
                        className="cls-1"
                        vectorEffect="non-scaling-stroke"
                        pathLength="1"
                        d="M72.92,165.27s-.14.47.72,1.24a21.58,21.58,0,0,1,3.47,3.08c1,1.32,4.94,3.11,4.94,3.11S85.64,175,87,176A6.24,6.24,0,0,0,89.91,177"
                        transform="translate(-2.21 -2.21)"
                    />
                </g>

                <g id="outline-svg">
                    {/* <path
                        className="cls-2"
                        pathLength="1"
                        vectorEffect="non-scaling-stroke"
                        d="M162.81,162.71c-1-6.26-3-8.22-5.64-12.52s-8.65-10.47-8.65-10.47-2.15-2.38-2.91-.9-2-.82-2-.82c-.91-6.35-2.3-6.06-2.3-6.06s-10.7-4.69-11.61-5.07a1.37,1.37,0,0,0-1.53.33l-.71-.38c-1.53-5.64-4-7.88-6-8.79a3.62,3.62,0,0,1-2-3.15l.24-3.92a66.93,66.93,0,0,0,4.63-6.45l2.11-.63c6.45-3,7-7.27,7-7.27L135,98.25s2.22,2.89,2.53.38c1-7.83,3.39-10.73,3.39-10.73l.15-1.08L139.92,84a5.76,5.76,0,0,1,.86-5.5S144,67,137.1,57.77s-13.81-8.6-13.81-8.6-5.16-4.78-10.27-5.93-16.3,1.25-25.23,5.21S73.74,66.56,73.4,72.92a132,132,0,0,1-1.82,14.35s.34.08,1,2.52,2.87,5.25,4.63,5.4a1.89,1.89,0,0,1,1.73,2s1,9.22,1.4,12.95-.58,3.22-.58,3.22c-12.06-2.86-17.69,12-17.69,12H60.43c-3.8-.57-10.75,3.16-11.74,3.82s-.47,2.71-.47,2.71c-8-.48-15.68,6.11-17.87,9.94C29.07,144,25.6,149.29,22,154.34a95,95,0,0,0,141.57,15.71C163.33,167.07,163.08,164.4,162.81,162.71Z"
                        transform="translate(-2.21 -2.21)"
                    /> */}
                    <path
                        xmlns="http://www.w3.org/2000/svg"
                        pathLength="1"
                        vectorEffect="non-scaling-stroke"
                        className="cls-1"
                        d="M163.55,170.05c-.22-3-.47-5.65-.74-7.34-1-6.26-3-8.22-5.64-12.52s-8.65-10.47-8.65-10.47-2.15-2.38-2.91-.9-2-.82-2-.82c-.91-6.35-2.3-6.06-2.3-6.06s-10.7-4.69-11.61-5.07a1.37,1.37,0,0,0-1.53.33l-.71-.38c-1.53-5.64-4-7.88-6-8.79a3.62,3.62,0,0,1-2-3.15l.24-3.92a66.93,66.93,0,0,0,4.63-6.45l2.11-.63c6.45-3,7-7.27,7-7.27L135,98.25s2.22,2.89,2.53.38c1-7.83,3.39-10.73,3.39-10.73l.15-1.08L139.92,84a5.76,5.76,0,0,1,.86-5.5S144,67,137.1,57.77s-13.81-8.6-13.81-8.6-5.16-4.78-10.27-5.93-16.3,1.25-25.23,5.21S73.74,66.56,73.4,72.92a132,132,0,0,1-1.82,14.35s.34.08,1,2.52,2.87,5.25,4.63,5.4a1.89,1.89,0,0,1,1.73,2s1,9.22,1.4,12.95-.58,3.22-.58,3.22c-12.06-2.86-17.69,12-17.69,12H60.43c-3.8-.57-10.75,3.16-11.74,3.82s-.47,2.71-.47,2.71c-8-.48-15.68,6.11-17.87,9.94C29.07,144,25.6,149.29,22,154.34"
                        transform="translate(-2.21 -2.21)"
                    />
                </g>
                <g id="border-svg">
                    <circle
                        pathLength="1"
                        fill="none"
                        vectorEffect="non-scaling-stroke"
                        className="cls-2"
                        cx="97.5"
                        cy="97.5"
                        r="95.5"
                    />
                </g>
            </svg>
        </div>
    </>
);

export default drawing;
