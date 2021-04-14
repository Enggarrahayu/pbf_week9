import React from "react";
import './Post.css';

const Post = (props) => {
    return(
        <div className = "artikel">
            <div className="gambar-artikel">
                <img src="http://placeimg.com/80/80/tech" alt="Gambar Tumbnail Artikel"/>
            </div>
            <div>
                <p className="nim-mahasiswa">NIM : {props.nim}</p>
                <p className = "nama-mahasiswa">Student Name: {props.nama}</p>
                <p className ="alamat-mahasiswa">Adress :{props.alamat}</p>
                <p className ="hp-mahasiswa">Phone Number :{props.hp}</p>
                <p className ="angkatan-mahasiswa">Generation :{props.angkatan}</p>
                <p className ="status-mahasiswa">Status : {props.status}</p>
                <button className="btn-warning" onClick={()=>props.hapusMahasiswa(props.idMahasiswa)}>Delete</button>
                <hr></hr>
            </div>
        </div>
    )
}

export default Post;