import User from './user.model'
import EmailCode from './emailCode.model'
import PasswordCode from './passwordCode.model'

User.hasMany(EmailCode)
EmailCode.belongsTo(User)

User.hasMany(PasswordCode)
PasswordCode.belongsTo(User)