export default function Home() {
    return (
        <>
            <div className="flex-1 flex flex-col justify-center items-center">
                <h1 className="text-8xl">React + TS</h1>
                <br/>
                <h1>Frontend-only React project that uses Typescript</h1>
                <br/>
                <br/>
                <div>
                    <h1 className="font-bold text-xl underline text-center">Project Purpose:</h1>
                    <ul className="list-disc">
                        <li>Incorporating TS Types and Interfaces to display basic data.</li>
                        <li>Using react-router-dom to create a multi-route SPA that also includes dynamic URLs.</li>
                        <li>Working with CSS Animations</li>
                        <li>Focus on responsiveness using Media Queries and custom CSS</li>
                        <br/>
                        <h1 className="font-bold">Note: Most CSS is done through tailwind CSS framework.</h1>
                    </ul>
                </div>
            </div>
        </>
    )
}