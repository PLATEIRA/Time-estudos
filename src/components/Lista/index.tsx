import React from "react";

function Lista(){
    const tarefas = []
    return(
        <aside>
            <h2>Estudo do dia</h2>
            <ul>
                <li>
                    <h3>
                        React
                    </h3>
                    <span>
                        02:00:00
                    </span>
                </li>
                <li>
                    <h3>
                        Javascript
                    </h3>
                    <span>
                        01:00:00
                    </span>
                </li>
            </ul>
        </aside>
    )
}

export default Lista;