import React, { useRef } from 'react'
import style from '../assets/css/Knowledge.module.css'
import SkillsList from './Skills';

function Knowledge() {
	const ref = useRef<HTMLDivElement | null>(null)

	const onHover = (e: any) => {
		e.target.childNodes[0].firstChild.style["transform"] = "scale(1.2)"
		e.target.childNodes[0].lastChild.style["display"] = "block"
	}
	const onLeave = (e: any) => {
		e.target.childNodes[0].firstChild.style["transform"] = "scale(1)"
		e.target.childNodes[0].lastChild.style["display"] = "none"
	}

	return <div id='mKnowledge' style={{ width: "90%", margin: "50px auto" }}>
		<h1 style={{ color: "#c000fb" }}>Tech Skills</h1>
		<div style={{ background: '#121315', padding: '20px', borderRadius: '10px', display: 'flex', flexWrap: "wrap", justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
			{SkillsList.map((skill, index) => (
				<div className={style.skills} ref={ref} key={index} style={{ height: "100px", width: "150px", padding: "15px 10px 0 10px", textAlign: "center", borderRadius: "4px" }} onMouseEnter={onHover} onMouseLeave={onLeave}>
					<div style={{ "pointerEvents": "none" }}>
						<skill.icon />
						<p style={{ display: "none", color: "#c000fb" }}>{skill.name}</p>
					</div>
				</div>
			))}
		</div>
	</div >
}

export default Knowledge;