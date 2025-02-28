import { Context, Session, Schema } from 'koishi'

import type Config from '../config'

function msg_mix(ctx: Context, kind: string, people: string, config: Config): any {
    ctx.on('message',(session: Session) =>{
        if(people == undefined){
            if(kind == 'OneBot_11'){
                const user = {
                    "stringMsg":{
                      "self_id":session.selfId,
                      "user_id":session.userId,
                      "time":session.timestamp,
                      "message_id":session.messageId,
                      "message_seq":session.messageId,
                      "real_id":session.messageId,
                      "message_type":"private",
                      "sender":{
                        "user_id":session.userId,
                        "nickname":session.username,
                        "card":session.username
                      },
                      "raw_message":session.content,
                      "font":14,
                      "sub_type":"friend",
                      "message":session.content,
                      "message_format":"string",
                      "post_type":"message"},
                    "arrayMsg":{
                      "self_id":session.selfId,
                      "user_id":session.userId,
                      "time":session.timestamp,
                      "message_id":session.messageId,
                      "message_seq":session.messageId,
                      "real_id":session.messageId,
                      "message_type":"private",
                      "sender":{
                          "user_id":session.userId,
                          "nickname":session.username,
                          "card":""
                      },
                      "raw_message":session.content,
                      "font":14,
                      "sub_type":"friend",
                      "message":[{
                          "type":"text",
                          "data":{"text":session.content}
                      }],
                      "message_format":"array",
                      "post_type":"message"
                    }
                }
                const get_user = JSON.stringify(user)
                return get_user
            }else if(kind == 'OneBot_v12'){
                return 0
            }
        }else{
            if(config.msg_all == true){
                if(kind == 'OneBot_v11'){
                    const part_group = {
                        "stringMsg":{
                        "self_id":session.selfId,
                        "user_id":session.userId,
                        "time":session.timestamp,
                        "message_id":session.messageId,
                        "message_seq":session.messageId,
                        "real_id":session.messageId,
                        "message_type":session.messageId,
                        "sender":{
                            "user_id":session.selfId,
                            "nickname":session.username,
                            "card":"",
                            "role":session.roleId
                            },
                        "raw_message":session.content,
                        "font":14,
                        "sub_type":"normal",
                        "message":session.content,
                        "message_format":"string",
                        "post_type":"message",
                        "group_id":session.guildId
                            },
                        "arrayMsg":{
                        "self_id":session.selfId,
                        "user_id":session.userId,
                        "time":session.timestamp,
                        "message_id":session.messageId,
                        "message_seq":session.messageId,
                        "real_id":session.messageId,
                        "message_type":"group",
                        "sender":{
                            "user_id":session.userId,
                            "nickname":session.username,
                            "card":session.username,
                            "role":"admin"
                            },
                        "raw_message":session.content,
                        "font":14,
                        "sub_type":"normal",
                        "message":[{
                            "type":"text",
                            "data":{
                                "text":session.content
                            }
                            }],
                            "message_format":"array",
                            "post_type":"message",
                            "group_id":session.guildId
                        }
                    }
                    const get_group = JSON.stringify(part_group)
                    return get_group
                }else if(kind == 'OneBot_v12'){
                    return 0
                }
            }else{
                if(kind == 'OneBot_v11'){
                    let meg_mix:string = "[CQ:at,qq="+session.selfId+"]"+session.content
                    const all_group = {
                        "stringMsg":{
                        "self_id":session.selfId,
                        "user_id":session.userId,
                        "time":session.timestamp,
                        "message_id":session.messageId,
                        "message_seq":session.messageId,
                        "real_id":session.messageId,
                        "message_type":session.messageId,
                        "sender":{
                                "user_id":session.selfId,
                                "nickname":session.username,
                                "card":"",
                                "role":session.roleId
                            },
                            "raw_message":meg_mix,
                            "font":14,
                            "sub_type":"normal",
                            "message":meg_mix,
                            "message_format":"string",
                            "post_type":"message",
                            "group_id":session.guildId
                        },
                        "arrayMsg":{
                            "self_id":session.selfId,
                            "user_id":session.userId,
                            "time":session.timestamp,
                            "message_id":session.messageId,
                            "message_seq":session.messageId,
                            "real_id":session.messageId,
                            "message_type":"group",
                            "sender":{
                            "user_id":session.userId,
                            "nickname":session.username,
                            "card":session.username,
                            "role":"admin"
                            },
                            "raw_message":meg_mix,
                            "font":14,
                            "sub_type":"normal",
                            "message":[{
                                "type":"at",
                                "data":{"qq":session.selfId}
                            },
                                    {
                                "type":"text",
                                "data":{"text":session.content}
                            }],
                            "message_format":"array",
                            "post_type":"message",
                            "group_id":session.guildId
                        }
                    }
                    const get_group = JSON.stringify(all_group)
                    return get_group
                }else if(kind == 'OneBot_v12'){
                    return 0
                }
            }
        }
    })
}