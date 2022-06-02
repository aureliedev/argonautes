import React from "react";

const MemberShow = (props) => {
  // console.log(props);
  const { members } = props;
  // console.log(members[0]);

  if (members.length > 0) {
    return (
      <div className="memberShow">
        <div className="members">
          {/* Member list */}
          <h2 className="membersTitle">Membres de l'équipage</h2>
          <section className="membersList">
            {members.map((member) => (
              <div className="memberItem" key={member._id}>
                {member.name}
              </div>
            ))}
          </section>
        </div>
      </div>
    );
  }

  // console.log(members)
};

export default MemberShow;
