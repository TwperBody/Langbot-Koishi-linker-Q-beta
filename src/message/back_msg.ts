import { Context, Session} from 'koishi'

import type Config from '../config'

function msg_back(ctx: Context, seq: string): any {
    ctx.on('message',(session: Session) =>{
        const back = {
            'status': 'ok',
            'retcode': 0,
            'data':{
                'message_id': session.messageId,
                },
            'message': '',
            'wording': '',
            'echo': seq
          }
        const next = JSON.stringify(back)
        return next
    })
}