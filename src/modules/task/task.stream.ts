import {parse} from 'csv-parse'
import fs from 'fs'
import path from 'path'
import tcpPortUsed from 'tcp-port-used'

import api from '../../services/axios'

const CSV_PATH = '../../../assets/tasks.csv'

type RowCsv = string[]

(async () => {
    const portInUse = await tcpPortUsed.check(Number(process.env.PORT))

    if (!portInUse) {
        throw new Error('O servidor não está rodando. Por favor, inicie o servidor antes de executar o script')
    }
})()

fs.createReadStream(path.join(__dirname, CSV_PATH))
    .pipe(parse({ delimiter: ',', skip_empty_lines: true, from_line: 2 }))
    .on('data', async (row: RowCsv) => {
        const [title, description] = row

        const task = {
            title,
            description
        }

        await api.post('/tasks', task)
    })
    .on('end', () => {
        console.log('CSV file successfully processed')
    })
