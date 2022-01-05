export default Users

type Props = {
  nameFilter: string;
}

function Users({nameFilter}: Props) {
  const users = [{friends: ['Albert', 'Nancy'], id: 23, name: 'Janice'}].filter(
    ({name}) => name.toLowerCase().includes(nameFilter),
  )

  return (
    <div className="user-list" data-testid="users" id="users-section">
      {users.map(user => (
        <div key={user.id}>
          {user.name} is friends with {user.friends.join(', ')}
        </div>
      ))}
    </div>
  )
}

export function variableNames() {
  const user$ = 'user stream'
  const $el = 'dom node'
  const camelCase = 'camelCase'
  const PascalCase = 'PascalCase'
  const __thing = '__filename'
  const CONST_VALUE = 'CONST_VALUE'

  return {
    $el,
    __thing,
    CONST_VALUE,
    PascalCase,
    camelCase,
    user$,
  }
}
