import { useEffect, useState } from "react";

function Q10() {
    const [running, setRunning] = useState(false);
    const [second, setSeconds] = useState(10);
    const [myChoice,setMyChoice]=useState(0);

    useEffect(() => {
        let i;

        if (second <= 0) {
            const alarm = new Audio("/song/29.ogg");
            alarm.play();
            clearInterval(i);
            return;
        }

        if (running) {
            i = setInterval(() => {
                setSeconds((prev) => prev - 1);
            }, 1000);
        }

        return () => clearInterval(i);

    }, [running, second]);
    function func(){
        setSeconds(myChoice);
    }

    return (
        <div style={{ width: "100%", height: "55vh", color: "white" }}>
            <div
                style={{
                    border: "1px solid",
                    width: "50%",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "15px",
                    backgroundColor: "orange",
                    margin: "20px auto",
                    boxShadow: "15px 15px 15px wheat",
                    borderRadius: "8px",
                }}
            >
                <div style={{display:"flex",width:"100%",gap:"10px"}}>
                    
            <input value={myChoice} onChange={(e)=>setMyChoice(+e.target.value)} type="number" style={{border:"1px solid white",width:"100%",padding:"10px 0",borderRadius:"8px"}} />
            <button onClick={func} style={{padding:"8px 30px", border:"1px solid white",borderRadius:"8px",color:"orange"}}>SetTime</button>
                </div>
                <h1
                    style={{
                        textAlign: "center",
                        fontSize: "35px",
                        fontWeight: "bold",
                    }}
                >
                    {second}
                </h1>

                <div
                    style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-evenly",
                        margin: "20px auto",
                    }}
                >
                    <button
                        onClick={() => setRunning(true)}
                        style={{
                            padding: "20px 30px",
                            border: "0",
                            borderRadius: "8px",
                            backgroundColor: "white",
                            color: "orange",
                        }}
                    >
                        Start
                    </button>

                    <button
                        onClick={() => setRunning(false)}
                        style={{
                            padding: "20px 30px",
                            border: "0",
                            borderRadius: "8px",
                            backgroundColor: "white",
                            color: "orange",
                        }}
                    >
                        Stop
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Q10;