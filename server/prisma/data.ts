import {faker} from "@faker-js/faker";
import {ItemNews} from "@prisma/client";
const randomeType = () =>{
    const types = ['link','job','story','poll','pollopt']
    return types[Math.floor(Math.random() * 4)]
}


export const postRandom  = (comments_count:number=0) => {
    let timeRandom = Number(faker.random.numeric(10))
    return {
        title:faker.lorem.text(),
        points:Number(faker.random.numeric()),
        user:faker.name.firstName(),
        time:timeRandom,
        time_ago:(Date.now()-timeRandom).toString(),
        content:faker.lorem.text(),
        type:randomeType(),
        url:faker.image.imageUrl(),
        comments_count:comments_count
    } as ItemNews
}
export const commentRandom = (item:ItemNews,comments_count:number=0) => {
    let timeRandom = Number(faker.random.numeric(10))+item.time
    return {
        points:Number(faker.random.numeric()),
        user:faker.name.firstName(),
        time:timeRandom,
        time_ago:(Date.now()-timeRandom).toString(),
        content:faker.lorem.text(),
        type:"comment",
        comments_count:comments_count?comments_count:undefined,
        parent_id:item.id,
        level:item.level?item.level+1:1
    } as ItemNews
}

