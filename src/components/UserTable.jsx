// UserTable.jsx
import React, { useState, useEffect } from 'react';
import { db } from '../Firebase/frebase-config'; // Firebase configuration
import { getDocs, collection, addDoc } from 'firebase/firestore'


const UserTable = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch active users from Firebase
        const unsubscribe = db.collection('users').where('status', '==', 'active').onSnapshot(snapshot => {
            setUsers(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        });

        return () => unsubscribe();
    }, []);

    const handleAddUser = () => {
        // Implement logic to add a new user to Firebase
    };

    const handleDeleteUser = (userId) => {
        // Implement logic to delete a user from Firebase
    };

    const handleStatusChange = (userId, newStatus) => {
        // Implement logic to change user status in Firebase
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Added Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.username}</td>
                            <td>{user.addedDate.toDate().toLocaleDateString()}</td>
                            <td>{user.status}</td>
                            <td>
                                <button onClick={() => handleAddUser(user.id)}>Add</button>
                                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                                <button onClick={() => handleStatusChange(user.id, 'inactive')}>Change Status</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;
