import { Context, Session} from 'koishi'

import type Config from '../config'

function log_msg(ctx: Context,config: Config): any {
    if(config.log_all == true){
        ctx.on('message',(session: Session) =>{
            console.log(new Date(),'\x1b[36m[langbot_connect_koishi]\x1b[33mget message\x1b[0m ','\x1b[32mmessage id:\x1b[0m',session.messageId,' \x1b[32mmessage:\x1b[0m',session.content)
        })
    }
    if(config.log_ct == true){
        if(config.log_all == true){
            ctx.on('message',(session: Session) =>{
                ctx.logger.info('\x1b[33mget message\x1b[0m ','\x1b[32mmessage id:\x1b[0m',session.messageId,' \x1b[32mmessage:\x1b[0m',session.content)
            })
        }
    }
}

function log_msg_object(ctx: Context,config: Config): any {
    if(config.log_all == true){
        ctx.on('message',(session: Session) =>{
            if(session.guildId == undefined){
                console.log(new Date(),'\x1b[36m[langbot_connect_koishi]\x1b[33mget message\x1b[0m ','\x1b[32mmessage id:\x1b[0m',session.messageId,' \x1b[32mmessage come from:\x1b[0m',"\x1b[35muser\x1b[0m",' \x1b[32m come from:\x1b[0m',session.userId)
            }else(
                console.log(new Date(),'\x1b[36m[langbot_connect_koishi]\x1b[33mget message\x1b[0m ','\x1b[32mmessage id:\x1b[0m',session.messageId,' \x1b[32mmessage come from:\x1b[0m',"\x1b[35mgroup\x1b[0m",' \x1b[32m come from:\x1b[0m',session.userId)
            )
        })
    }
    if(config.log_ct == true){
        ctx.on('message',(session: Session) =>{
            if(session.guildId == undefined){
                ctx.logger.info('\x1b[33mget message\x1b[0m ','\x1b[32mmessage id:\x1b[0m',session.messageId,' \x1b[32mmessage come from:\x1b[0m',"\x1b[35muser\x1b[0m",' \x1b[32m come from:\x1b[0m',session.userId)
            }else(
                ctx.logger.info('\x1b[33mget message\x1b[0m ','\x1b[32mmessage id:\x1b[0m',session.messageId,' \x1b[32mmessage come from:\x1b[0m',"\x1b[35mgroup\x1b[0m",' \x1b[32m come from:\x1b[0m',session.userId)
            )
        })
    }
}