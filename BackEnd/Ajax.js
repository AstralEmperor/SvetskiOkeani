
// ajax za dobavljanje podataka za vesti iz JSON-a
export async function nabaviVesti(){
        const req = await fetch('./podatci/novosti.json',{
                method:"GET",
                headers:{
                    'Content-Type':'application/json'
                }

        })
        const vesti = await req.json()
        .catch(error => console.log(error))
        return vesti;
}
// ajax za dobavljanje podataka za znamenitosti iz JSON-a
export async function nabaviZnamenitosti(){
        const req = await fetch('./podatci/znamenitosti.json',{
                method:"GET",
                headers:{
                        'Content-Type':'application/json'
                }
        })
        const znamenitosti = await req.json()
        .catch(error => console.log(error))
        return znamenitosti;
}