import { Context, Session} from 'koishi'

function get_next(ctx: Context): any {
    let commands: boolean = false
    ctx.on('message',(session: Session) =>{
        commands = false
        ctx.middleware((session, Next) =>{
            if(session.content ===''){
              commands = false;
            }
              return Next();
        })
    })
    return commands
}