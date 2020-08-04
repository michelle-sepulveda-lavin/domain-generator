const pronoun = ['the','our'];
const adj = ['great', 'big' ];
const noun = ['jogger','racoon'];
const extend = [".com", ".us"]

for(let x of pronoun){
    for(let j of adj){
        for(let k of noun){
            for(let h of extend){
                console.log(x+j+k+h )
            }
        }
    }
}
