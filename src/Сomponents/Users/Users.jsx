import React from 'react'
import Paginator from "../commons/Paginator/Paginator";
import User from "./User";

let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {
    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount}
                   pageSize={pageSize}/>
        <div>
            {users.map(u => <User user={u} followingInProgress={props.followingInProgress} unfollow={props.unfollow}
                                  follow={props.follow} key={u.id}/>)}
        </div>
    </div>
}

export default Users