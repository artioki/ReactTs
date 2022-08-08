import { ItemNews, PrismaClient} from '@prisma/client'
import {commentRandom,postRandom} from "./data";
const prisma = new PrismaClient()
const addItem = async (item_length:number=10,Parent:ItemNews|undefined = undefined) =>{
  if(!Parent){
    Parent = await prisma.itemNews.create({data: postRandom(item_length)});
  }
  const countComment = []
  while(item_length>0){
    let count = Math.floor(Math.random() * (item_length-1))+1
    countComment.push(count)
    item_length-=count
  }

  for(let count of countComment){
    const comment = await prisma.itemNews.create({data: commentRandom(Parent,count-1)})
    if(count-1){
      addItem(count-1,comment)
    }
  }
}
const main = async () => {
  console.log('start seeding …')
  for(let i = 0;i<50;i++){
    await addItem( Math.floor(Math.random()*15)+1);
  }
  console.log('seeding done');
}

main()
  .catch(e => {
    console.error('foo', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
