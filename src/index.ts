import { config } from 'dotenv'
config()

import server from './server'

server.listen(process.env.PORT, () => {
  console.log('Server is listening on port 3000')
})