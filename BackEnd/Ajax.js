
// ajax za dobavljanje podataka za vesti iz JSON-a
export async function nabaviVesti(){
        const req = await fetch('../BackEnd/podatci/novosti.json',{
                method:"GET",
                headers:{
                    'Content-Type':'application/json'
                }

        })
        const vesti = await req.json()
        .catch(error => console.log(error))
        return vesti;
}