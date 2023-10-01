import { League } from "../models/League";

export default function CardLeague({ league }: { league: League }) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg inline-flex justify-items-center flex-col border-solid border-indigo-500/100 ">
            <img className="justify-center h-48 w-48" src={league.logo} alt="logo"></img>
            <div className="px-6 py-4">
                <div className="font-bold text- text-center mb-2">{league.name}</div>
                <p className="text-gray-700 text-base text-center">
                {league.type}
                </p>
            </div>
        </div>
    )
}