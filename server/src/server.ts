import express from "express"
import { PrismaClient } from "@prisma/client"

const app = express()
const PORT = 5000

const prisma = new PrismaClient()

app.use(express.json());
app.use((req, res, next) => {
  res.header({"Access-Control-Allow-Origin": "*"});
  next();
})
app.get('/', (req,  res) => {
  res.json('hello there')
})

app.get('/comments/:id.:json', async (req, res ) => {
  let id = Number(req.params["id"])-1;
  let json = req.params["json"];

  if(!(id+1) || id < 0 || id > 11 || json !=='json'){
    res.json('данных нет')
  }
  try {
    const users = await prisma.itemNews.findMany({
      skip: 30*id,
      take: 30,
      where:{type:'comment'},
      orderBy:{time:"asc"}
    })
    res.json(users)
  } catch(err) {
    console.log(err)
  }
})
app.get('/newest/:id.:json', async (req, res ) => {
  let id = Number(req.params["id"])-1;
  let json = req.params["json"];

  if(!(id+1) || id < 0 || id > 11 || json !=='json'){
    res.json('данных нет')
  }
  try {
    const newest = await prisma.itemNews.findMany({
      skip: 30*id,
      take: 30,
      where:{type: {in:['link','job','story','poll','pollopt']}},
      orderBy:{time:"asc"}
    })
    res.json(newest)
  } catch(err) {
    console.log(err)
  }

})
app.get('/item/:id.json',async (req,res)=>{
  let id = Number(req.params["id"]);
  try {
    const users = await prisma.itemNews.findFirst({
      where:{
        parent_id:null,
        id
      },
      include:{
        comments:{
          where:{
            level:1
          },
          orderBy:{time:"asc"},
          include:{
            comments:{
              where:{
                level:2
              },
              orderBy:{time:"asc"},
              include:{
                comments:{
                  where:{
                    level:3
                  },
                  orderBy:{time:"asc"},
                  include:{
                    comments: {
                      where:{
                        level:4
                      },
                      orderBy:{time:"asc"},
                    }

                  }
                }
              }
            }
          }
        }
      }
    })
    res.json(users)
  } catch(err) {
      console.log(err)
    }
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
