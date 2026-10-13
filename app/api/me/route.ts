import {getChatGPTUser} from '../../chatgpt-auth';
export async function GET(){const u=await getChatGPTUser();return Response.json({user:u?{name:u.displayName,email:u.email}:null});}
