import React from "react";
import "./userInfo.css";

const App = () =>{
    return <div classname="app-container">
        <br/>
        <table >
            <thead >
                <tr>
                <th className="tr1">電話</th>
                <th className="tr1">姓氏</th>
                <th className="tr1">名字</th>
                <th className="tr1">性別</th>
                </tr>
            </thead>
            <tr >
                <th className="tr">不顯示</th>
                <th className="tr">不顯示</th>
                <th className="tr">不顯示</th>
                <th className="tr">不顯示</th>
            </tr><br/>
            <thead >
                <tr>
                <th className="tr1">學校</th>
                <th className="tr1">科系</th>
                <th className="tr1">在學狀況</th>
                <th className="tr1">其他聯絡方式</th>
                </tr>
            </thead>
            <tr>
                <th className="tr">不顯示</th>
                <th className="tr">不顯示</th>
                <th className="tr">不顯示</th>
                <th className="tr">不顯示</th>
            </tr>
        </table>
    </div>
}

export default App;