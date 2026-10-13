import Panel from './panel';
import {getChatGPTUser} from '../chatgpt-auth';
import {env} from 'cloudflare:workers';
import {getDb} from '../../db';
import {orders} from '../../db/schema';
import {desc} from 'drizzle-orm';
export const dynamic='force-dynamic';
export default async function Page(){const u=await getChatGPTUser();const owner=(env as unknown as Record<string,string>).ADMIN_USER_ID;const authorized=!!owner&&u?.userId===owner;let rows:any[]=[];if(authorized)rows=await getDb().select().from(orders).orderBy(desc(orders.createdAt)).limit(100);return <Panel authorized={authorized} rows={rows}/>;}
