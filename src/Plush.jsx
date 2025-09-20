

export default function Plush({name, emoji, personality, twist , url}){
    return (
        <div className="pt-7 justify-items-center font-[Fredoka] h-[60vh] text-3xl pb-20">
            <h3 className="text-4xl tracking-wider">Meet <span className="font-medium"> {name}</span>!</h3>
            {emoji === "" ? <></> : <p className="text-4xl">{emoji}</p>}
            <p className="pt-6"> <span className="font-medium">About them:</span> {personality}</p>
            <p className="pt-3"><span className="font-medium">Twist:</span> {twist}</p>
            <h3 className="pt-7 font-medium text-4xl">Here's how you can get started: </h3>
            <div className="pb-4">
                <iframe width="560" height="315" src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    );
}