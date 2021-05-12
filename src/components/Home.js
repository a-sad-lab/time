import React, { Component } from "react";
import { Recorder } from "timecatjs";
import logo from "../logo.svg";

export default class Home extends Component {
  recorder = Recorder;
  async start() {
    this.recorder = new Recorder();
  }
  async componentWillUnmount() {
    this.recorder.destroy && this.recorder?.destroy();
  }
  async stop() {
    this.recorder?.destroy();
  }
  async clear() {
    this.recorder.clearDB && this.recorder?.clearDB()
  }
  draw = function draw() {
    var now = new Date();
    var canvas = document.getElementById('canvas')
    if(!(canvas && canvas.getContext('2d'))) {
      return
    }
    let ctx = canvas.getContext('2d');
    ctx.save();
    ctx.clearRect(0, 0, 150, 150);
    ctx.translate(75, 75);
    ctx.scale(0.4, 0.4);
    ctx.rotate(-Math.PI / 2);
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'white';
    ctx.lineWidth = 8;
    ctx.lineCap = 'round';

    // Hour marks
    ctx.save();
    for (var i = 0; i < 12; i++) {
      ctx.beginPath();
      ctx.rotate(Math.PI / 6);
      ctx.moveTo(100, 0);
      ctx.lineTo(120, 0);
      ctx.stroke();
    }
    ctx.restore();

    // Minute marks
    ctx.save();
    ctx.lineWidth = 5;
    for (i = 0; i < 60; i++) {
      if (i % 5!= 0) {
        ctx.beginPath();
        ctx.moveTo(117, 0);
        ctx.lineTo(120, 0);
        ctx.stroke();
      }
      ctx.rotate(Math.PI / 30);
    }
    ctx.restore();

    var sec = now.getSeconds();
    var min = now.getMinutes();
    var hr  = now.getHours();
    hr = hr >= 12 ? hr - 12 : hr;

    ctx.fillStyle = 'black';

    // write Hours
    ctx.save();
    ctx.rotate(hr * (Math.PI / 6) + (Math.PI / 360) * min + (Math.PI / 21600) *sec);
    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.moveTo(-20, 0);
    ctx.lineTo(80, 0);
    ctx.stroke();
    ctx.restore();

    // write Minutes
    ctx.save();
    ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(-28, 0);
    ctx.lineTo(112, 0);
    ctx.stroke();
    ctx.restore();

    // Write seconds
    ctx.save();
    ctx.rotate(sec * Math.PI / 30);
    ctx.strokeStyle = '#D40000';
    ctx.fillStyle = '#D40000';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(-30, 0);
    ctx.lineTo(83, 0);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(95, 0, 10, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.fillStyle = 'rgba(0, 0, 0, 0)';
    ctx.arc(0, 0, 3, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.restore();

    ctx.beginPath();
    ctx.lineWidth = 14;
    ctx.strokeStyle = '#325FA2';
    ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
    ctx.stroke();

    ctx.restore();

    window.requestAnimationFrame(draw);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p>
            <button onClick={() => this.start()}>start</button>
            *
            <button onClick={() => this.stop()}>stop</button>
            *
            <button onClick={() => this.clear()}>clear</button>
            *
            <button onClick={() => this.draw()}>draw</button>
          </p>
        </header>
        <canvas id="canvas" width="150" height="150" style={{border: '1px solid red'}}></canvas>
        <iframe style={{width: '98%', height: '350px'}} src="http://localhost:3000/record/form"></iframe>
        {/* <iframe style={{width: '98%', height: '350px'}} src="https://baidu.com"></iframe>
        <iframe style={{width: '98%', height: '250px'}} src="https://cn.bing.com"></iframe> */}
        <p>I am a line!</p>
        <p>I am a line!</p>
        <p>I am a line!</p>
        <p>I am a line!</p>
        <p>I am a line!</p>
        <p>I am a line!</p>
        <p>I am a line!</p>
        <p>I am a line!</p>
        <p>I am a line!</p>
        <p>I am a line!</p>
        <p>I am a line!</p>
        <p>I am a line!</p>
        <p>I am a line!</p>
        <p>I am a line!</p>
        <p>I am a line!</p>
        <p>I am a line!</p>
        <p>I am a line!</p>
        <p>I am a line!</p>
        <p>I am a line!</p>
        <p>I am a line!</p>
        <p>I am a line!</p>
        <p>I am a line!</p>
        <p>I am a line!</p>
        <p>I am a line!</p>
        <p>I am a line!</p>
        <p>I am a line!</p>
        <p>I am a line!</p>
      </div>
    );
  }
}
