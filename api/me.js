import { send } from './_lib/db.js';
import { guard, isEditor } from './_lib/auth.js';
export default guard(async (req, res, user) => {
  if (!user) return send(res, 200, { user: null });
  send(res, 200, { user: {
    login: user.login, name: user.name, avatar: user.avatar,
    editor: isEditor(user.login)
  }});
});
