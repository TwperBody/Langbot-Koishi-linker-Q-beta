import { Schema } from 'koishi'

export interface Config{
    choice: any
    token: string
    msg_all: boolean 

    head_Self_ID: string;
    head_Websocket_Version: string;
    head_Websocket_key: string;
    head_User_Agent: string;
    head_host: string;
    head_get: string;
    head_Authorization: string;
    head_x_client_role: string;
    head_Content: string;
    

    log_msg: boolean;
    log_all: boolean;
    log_ct: boolean;
    area: string;
    ports: number;
    link: string;
    test_QQnumber: string;
    test_QQbot_id: string;
    // timeout: number;
    keepalive: boolean;
    openalive: boolean;
}
  

export const name = 'langbot-koishi-linker-q'

export default Config