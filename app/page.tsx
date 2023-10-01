import CardLeague from "./shared/CardLeague";
import {getLeagues} from './services/getLeagues'
export default async function HomePage(){
    const leagues = await getLeagues();
    return (
        <div className="grid grid-cols-4 place-content-center gap-2">
           { leagues.response.slice(0,100).map((league:any) => (
            <CardLeague key={league.league.id} league={league.league}/>
           ))

           }
        </div>    
    )
}