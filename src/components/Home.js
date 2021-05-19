import React, { Component, useState, useEffect } from "react";
import { Recorder, Player } from "timecatjs";
// import * as rrweb from 'rrweb'
// import rrwebPlayer from 'rrweb-player'
import logo from "../logo.svg";

export default function Home() {

  const [rec, updateRec] = useState()
  const [player, updatePlayer] = useState()

  useEffect(() => () => {
    stop()
    clear()
  })

  function uploadService(records) {
    return fetch('http://localhost:5000/records', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(records)
    })
  }

  function clearRemote() {
    return fetch('http://localhost:5000/records', {
        method: 'delete'
    })
  }

  // function start() {
  //   updateRec(new Recorder())
  // }
  async function start() {
    await clearRemote()
    const rec = new Recorder()
    rec.onData(record => {
      addRecord(record || {key: window.location.href, record})
    })

    const upLoader = (options = { interval: 2000, max: 30 }) => {
        const records = []
        const { max, interval } = options
        let timer

        return function (record) {
            if (record) {
                records.push(record)
            }
            if (!timer && records.length) {
                timer = window.setTimeout(uploadRecords, interval)
            }
        }

        async function uploadRecords() {
            clearTimeout(timer)
            timer = undefined
            const maxIndex = Math.min(max, records.length)
            return uploadService(records.slice(0, maxIndex))
                .then(() => {
                    records.splice(0, maxIndex)
                    if (records.length) {
                        addRecord()
                    }
                })
        }
    }

    const addRecord = upLoader()

    // updateRec(rec)
  }

  function stop() {
    rec && rec.destroy()
  }

  function clear() {
    rec && rec.clearDB()
    player && player.destroy()
  }

  // function play() {
  //   updatePlayer(new Player({
  //     target: '#pt'
  //   }))
  // }
  async function play() {
    const records = await getRecords()
    records.length > 0 && new Player({
        target: '#pt',
        records
    })

    function getRecords() {
      return fetch('http://localhost:5000/records')
          .then(res => res.json())
    }
  }

  function draw() {
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
      if (i % 5!== 0) {
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

  return (
    <div className="App">
      <div id="pt" style={{border: '1px solid aqua', margin: "0 auto", width: "600", height: "400"}}></div>
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
          <button onClick={start}>start</button>
          *
          <button onClick={stop}>stop</button>
          *
          <button onClick={play}>play</button>
          *
          <button onClick={clear}>clear</button>
          *
          <button onClick={draw}>draw</button>
        </p>
      </header>
      <canvas id="canvas" width="150" height="150" style={{border: '1px solid red'}}></canvas>
      {/* <iframe style={{width: '98%', height: '350px'}} title="my iframe" src="/record/form"></iframe> */}
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
  )
}

// export default class Home extends Component {
//   // recorder = undefined;
//   async start() {
//     // console.log('rrwebPlayer', Object.keys(rrwebPlayer))
//     stopFn = rrweb.record({
//       emit(event) {
//         console.log('[event]', event)
//         events.push(event)
//         if(events.length > 300) {
//           stopFn()
//         }
//       }
//     })
//     // this.recorder = new Recorder();
//   }
//   async componentWillUnmount() {
//     stopFn && stopFn()
//     // this.recorder && this.recorder.destroy && this.recorder.destroy();
//   }
//   async stop() {
//     stopFn && stopFn()
//     // this.recorder && this.recorder.destroy && this.recorder.destroy();
//   }
//   async clear() {
//     if(events.length > 0) events = []
//     // this.recorder && this.recorder.clearDB && this.recorder.clearDB()
//   }
//   async play() {
//     if(events.length > 0) {
//       new rrwebPlayer({
//         target: document.body, // 可以自定义 DOM 元素
//         // 配置项
//         props: {
//           events,
//         },
//       });
//     }
//   }
//   draw = function draw() {
//     var now = new Date();
//     var canvas = document.getElementById('canvas')
//     if(!(canvas && canvas.getContext('2d'))) {
//       return
//     }
//     let ctx = canvas.getContext('2d');
//     ctx.save();
//     ctx.clearRect(0, 0, 150, 150);
//     ctx.translate(75, 75);
//     ctx.scale(0.4, 0.4);
//     ctx.rotate(-Math.PI / 2);
//     ctx.strokeStyle = 'black';
//     ctx.fillStyle = 'white';
//     ctx.lineWidth = 8;
//     ctx.lineCap = 'round';

//     // Hour marks
//     ctx.save();
//     for (var i = 0; i < 12; i++) {
//       ctx.beginPath();
//       ctx.rotate(Math.PI / 6);
//       ctx.moveTo(100, 0);
//       ctx.lineTo(120, 0);
//       ctx.stroke();
//     }
//     ctx.restore();

//     // Minute marks
//     ctx.save();
//     ctx.lineWidth = 5;
//     for (i = 0; i < 60; i++) {
//       if (i % 5!== 0) {
//         ctx.beginPath();
//         ctx.moveTo(117, 0);
//         ctx.lineTo(120, 0);
//         ctx.stroke();
//       }
//       ctx.rotate(Math.PI / 30);
//     }
//     ctx.restore();

//     var sec = now.getSeconds();
//     var min = now.getMinutes();
//     var hr  = now.getHours();
//     hr = hr >= 12 ? hr - 12 : hr;

//     ctx.fillStyle = 'black';

//     // write Hours
//     ctx.save();
//     ctx.rotate(hr * (Math.PI / 6) + (Math.PI / 360) * min + (Math.PI / 21600) *sec);
//     ctx.lineWidth = 14;
//     ctx.beginPath();
//     ctx.moveTo(-20, 0);
//     ctx.lineTo(80, 0);
//     ctx.stroke();
//     ctx.restore();

//     // write Minutes
//     ctx.save();
//     ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
//     ctx.lineWidth = 10;
//     ctx.beginPath();
//     ctx.moveTo(-28, 0);
//     ctx.lineTo(112, 0);
//     ctx.stroke();
//     ctx.restore();

//     // Write seconds
//     ctx.save();
//     ctx.rotate(sec * Math.PI / 30);
//     ctx.strokeStyle = '#D40000';
//     ctx.fillStyle = '#D40000';
//     ctx.lineWidth = 6;
//     ctx.beginPath();
//     ctx.moveTo(-30, 0);
//     ctx.lineTo(83, 0);
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
//     ctx.fill();
//     ctx.beginPath();
//     ctx.arc(95, 0, 10, 0, Math.PI * 2, true);
//     ctx.stroke();
//     ctx.fillStyle = 'rgba(0, 0, 0, 0)';
//     ctx.arc(0, 0, 3, 0, Math.PI * 2, true);
//     ctx.fill();
//     ctx.restore();

//     ctx.beginPath();
//     ctx.lineWidth = 14;
//     ctx.strokeStyle = '#325FA2';
//     ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
//     ctx.stroke();

//     ctx.restore();

//     window.requestAnimationFrame(draw);
//   }
//   render() {
//     return (
//       <>
//       <div id="pt" style={{border: '1px solid red', margin: "0 auto", width: "600", height: "400"}}></div>
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.tsx</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
          
//           <p>
//             <button onClick={() => this.start()}>start</button>
//             *
//             <button onClick={() => this.stop()}>stop</button>
//             *
//             <button onClick={() => this.play()}>play</button>
//             *
//             <button onClick={() => this.clear()}>clear</button>
//             *
//             <button onClick={() => this.draw()}>draw</button>
//           </p>
//         </header>
//         <canvas id="canvas" width="150" height="150" style={{border: '1px solid red'}}></canvas>
//         <iframe style={{width: '98%', height: '350px'}} title="my iframe" src="/record/form"></iframe>
//         {/* <iframe style={{width: '98%', height: '350px'}} src="https://baidu.com"></iframe>
//         <iframe style={{width: '98%', height: '250px'}} src="https://cn.bing.com"></iframe> */}
//         <p>I am a line!</p>
//         <p>I am a line!</p>
//         <p>I am a line!</p>
//         <p>I am a line!</p>
//         <p>I am a line!</p>
//         <p>I am a line!</p>
//         <p>I am a line!</p>
//         <p>I am a line!</p>
//         <p>I am a line!</p>
//         <p>I am a line!</p>
//         <p>I am a line!</p>
//         <p>I am a line!</p>
//         <p>I am a line!</p>
//         <p>I am a line!</p>
//         <p>I am a line!</p>
//         <p>I am a line!</p>
//         <p>I am a line!</p>
//         <p>I am a line!</p>
//         <p>I am a line!</p>
//         <p>I am a line!</p>
//         <p>I am a line!</p>
//         <p>I am a line!</p>
//         <p>I am a line!</p>
//         <p>I am a line!</p>
//         <p>I am a line!</p>
//         <p>I am a line!</p>
//         <p>I am a line!</p>
//       </div>
//       </>
//     );
//   }
// }
