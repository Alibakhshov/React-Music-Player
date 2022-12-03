import React from 'react'
import './Main.css'

const Main = () => {
  return (
    <><link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link><div class="wrapper">
      <div class="top-bar">
        <i class="material-icons">expand_more</i>
        <span>Now Playing</span>
        <i class="material-icons">more_horiz</i>
      </div>

      <div class="img-area">
        <img src="" alt="" />
      </div>

      <div class="song-details">
        <p class="name"></p>
        <p class="artist"></p>
      </div>

      <div class="progress-area">
        <div class="progress-bar">
          <audio id="main-audio" src=""></audio>
        </div>
        <div class="song-timer">
          <span class="current-time">0:00</span>
          <span class="max-duration">0:00</span>
        </div>
      </div>

      <div class="controls">
        <i id="repeat-plist" class="material-icons" title="Playlist looped">repeat</i>
        <i id="prev" class="material-icons">skip_previous</i>
        <div class="play-pause">
          <i class="material-icons play">play_arrow</i>
        </div>
        <i id="next" class="material-icons">skip_next</i>
        <i id="more-music" class="material-icons">queue_music</i>
      </div>

      <div class="music-list">
        <div class="header">
          <div class="row">
            <i class="list material-icons">queue_music</i>
            <span>Music list</span>
          </div>
          <i id="close" class="material-icons">close</i>
        </div>
        <ul>
        </ul>
      </div>
    </div></>
  )
}

export default Main;