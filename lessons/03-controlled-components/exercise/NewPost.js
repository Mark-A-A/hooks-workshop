import React, { useState } from "react"
import { useAppState } from "app/app-state"
import Avatar from "app/Avatar"
import Minutes from "app/Minutes"
import { FaDumbbell } from "react-icons/fa"
import RecentPostsDropdown from "app/RecentPostsDropdown"

const errorClass = "NewPost_error"

const MAX_MESSAGE_LENGTH = 200

export default function NewPost({ takeFocus, date, onSuccess, showAvatar }) {
  const [{ auth }] = useAppState()
  
  const [postText, updatePostText] = useState("")
  const [error, setError] = useState(null)
  const [disabled, toggleDisableSubmit] = useState(false)

  const handleTypingPostText = (e)=>{
    e.preventDefault();
    console.dir(e.target.value)
    
    updatePostText(e.target.value)
  }

  // const handle
  return (
    <div className="NewPost">
      {showAvatar && <Avatar uid={auth.uid} size={70} />}
      <form className="NewPost_form" onChange={checkPostText}>
        <textarea
          className="NewPost_input"
          placeholder="Tell us about your workout!"
          value={postText}
          onChange={handleTypingPostText}
        />
        <div className="NewPost_char_count">
          {postText.length}/{MAX_MESSAGE_LENGTH}
        </div>
        <RecentPostsDropdown uid={auth.uid} onSelect={(message) => {}}/>
        <div className="NewPost_buttons">
          <Minutes date={date} />
          <div>
            <button type="submit" className="icon_button cta" disabled={disabled}>
              <FaDumbbell /> <span>Post</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
