import { Context, Schema } from 'koishi'

import type Config from './config'
import type get_mix from './message/get_msg'
import type {log_msg, log_msg_object,log_back_acc,log_back_ruf} from './commands/log_msg'
import type {get_config} from './commands/log_config'
import type {get_next} from './line/try'
import type {get_back} from './message/get_msg'

export const Config: Schema<Config> = Schema.intersect([
  Schema.object({
      area: Schema.string()
      .role('textarea',{rows:[5, 5]})
      .default('本插件是用于连接Langbot的插件\n由于Langbot社区问题，部署问题请咨询langbot非官方社区\n本插件基于ob11协议，其他平台请使用其他版本\n谢谢支持')
      .description('介绍'),
  }).description('说明'),
       
  Schema.object({
      ports: Schema.number()
      .default(2280)
      .description('进行测试链接**测试**端口'),
  }).description('连接测试'),

  Schema.object({
      link: Schema.string()
      .default('ws://127.0.0.1:2280/ws')  
      .role('link')
      .required()
      .description('Websocket连接地址'),
      // timeout: Schema.number()
      // .description('最长等待时间'),
      keepalive: Schema.boolean()
      .description('是否持续保持连接')
      .default(true),
      openalive: Schema.boolean()
      .description('是否对地址进行连接'), 
      token: Schema.string()
      .role('secret')
      .description('token设置'),
      msg_all: Schema.boolean()
      .required()
      .description('受否Langbot全回复，用于关闭AI触发的Langbot，由于转译特殊原因，本插件触发不会采用AI触发，而是Bot配置项的名称，届时禁用了AT触发'),
      choice: Schema.union([
        Schema.const('OneBot_v12').disabled(),
        Schema.const('OneBot_v11'),
      ]).required().description('请求协议'),
  }).description('连接设置'),
  
  Schema.union([
    Schema.object({
      choice: Schema.const('OneBot_v12').required(),
    }).description('Onebot_v12消息头'),

    Schema.object({
      choice: Schema.const('OneBot_v11').required(),
      head_get: Schema.string()
      .default('GET /ws HTTP/1.1')
      .deprecated()
      .description('get请求'),
      head_Self_ID: Schema.string()
      .required()
      .description('Bot ID(QQ号)'),
      head_Authorization: Schema.string()

      .default('Bearer ')
      .deprecated()
      .description('Authorization'),
      head_x_client_role: Schema.string()

      .default('Universal')
      .deprecated()
      .description('x-client-role'),
      head_Websocket_Version: Schema.string()
      .default('13')

      .deprecated()
      .description('Websocket版本'),
      head_Websocket_key: Schema.string()
      .role('secret')
      .required()
      .description('Websocket key'),
      head_User_Agent: Schema.string()
      .default('onebot/11')
      .experimental()
      // .default('onebot/11')
      .description('User-Agent'),
      head_Content: Schema.string()

      .deprecated()
      .default('Upgrade')
      .description('Content'),
      head_host: Schema.string()

      .experimental()
      .default('127.0.0.1:2280')
      .role('link')
      .description('host')
    }).description('Onebot_v11消息头'),

  ]),

  Schema.object({
      test_QQnumber: Schema.string()
      .description('Bot管理员QQ号'),
      test_QQbot_id: Schema.string()
      .description('Bot名称')

  }).description('bot设置'),

  Schema.object({
  log_all: Schema.boolean()
  .default(false)
  .experimental()
  .description('调试日志显示'),
  log_msg: Schema.boolean()
  .default(false)
  .description('消息交换显示')
  .experimental()
  }).description('日志调试'),

  Schema.object({
  log_ct: Schema.boolean()
  .default(true)
  .description('控制台日志')
  .experimental()
  }).description('控制台日志')
])

export function apply(ctx: Context, config: Config) {
  
}
