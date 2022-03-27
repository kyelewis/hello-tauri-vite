#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]


// Server
use std::thread;
use std::net;
use std::io;

fn handle_client(mut stream: TcpStream) {
    let mut data = [0 as u8; 50];
    while match stream.read(&mut data) {
        Ok(size) => {
            stream.write(&data[0..size]).unwrap();
            true
        },
        Err(_) => {
            stream.shutdown(Shutdown::Both).unwrap();
            false
        }
    } {}
}

#[tauri::command]
async fn run_server() {
    let listener = net::TcpListener::bind("0.0.0.0:3001").unwrap();

    for stream in listener.incoming() {
        match stream {
            Ok(stream) => {
                thread::spawn(move|| {
                    handle_client(stream)
                });
            }
            Err(e) => {
                println!("Error: {}", e);
            }
        }
    }
    drop(listener);
}


#[tauri::command]
fn hello_world() {
  println!("Hello, World!");
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![hello_world, run_server])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
