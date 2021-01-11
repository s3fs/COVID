import React from 'react'


const Card = ({ i }) => {
    let class1 = i.status === 'stable' ? 'liNoteStable' : i.status === 'falling' ? 'liNoteFalling' : 'liNoteRising'
    const mergeFn = (a) => {
        let b = a.split(' ')

        return (b.length === 1 ? a : b = b.map(i => i.slice(0, 1)).join(''))
    }

    return (
            <li className={`liNote ${class1}`} key={Math.random(999)}>
                <div className={'liProvince'}>{i['province'] !== '' ? mergeFn(i['province']) : null}</div> 
                <div className={'liCountry'}>{i['country']}</div>
                {i.cases.map(i => Object.entries(i).map(([ key, val ]) => <div className={'liCases'}><span className={'liCasesDate'}>{key}</span><span className={'liCasesNumber'}>{val}</span></div>))}
                <div className={'liStatus'}>{i['status']}</div>
            </li>
        )
}

export default Card