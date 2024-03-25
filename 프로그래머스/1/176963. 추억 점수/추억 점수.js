function solution(name, yearning, photo) {
    var answer = [];
    let obj = {}
    
    name.forEach((e, i) => {
        obj[e] = yearning[i]
    })
    
    photo.forEach((e) => {
        let temp = 0
        e.forEach((a) => {
            if (obj[a] != undefined) {
                temp += obj[a]
            }
        })
        answer.push(temp)
    })
    return answer;
}