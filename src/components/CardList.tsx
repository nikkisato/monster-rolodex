import * as React from "react"
import Card from "./Card";
import { IMonster } from "../containers/App"

const CardList = ({ monsters }: { monsters: Array<IMonster>}) => {
	return (
		<div>
			{
				monsters.map((user, i) => {
					return(<Card
						key={i}
						id={monsters[i].id}
						name={monsters[i].name}
						email={monsters[i].name}
					/>
					)
				})
			}
		</div>
	)
}

export default CardList;