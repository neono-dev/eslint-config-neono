function Users({nameFilter, onChange}) {
    const users = [{friends: ['Albert', 'Nancy'], id: 23, name: 'Janice'}].filter(
        ({name}) => name.toLowerCase().includes(nameFilter),
    )

    return (
        <div className="user-list" data-testid="users" id="users-section">
            <input onChange={onChange} />
            {users.map(user => (
                <div key={user.id}>
                    {user.name} is friends with {user.friends.join(', ')}
                </div>
            ))}
        </div>
    )
}

export default Users;
